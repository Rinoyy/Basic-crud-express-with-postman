const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getData = async (req, res) => {
    try {
        const getAll = await prisma.item.findMany();
        res.json(getAll);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// const show = async (req, res) => {
//     const { id } = req.params; 
//     try {
//         const show = await prisma.item.findUnique({
//             where: {
//                 id: Number(id),
//             }
//         });

//         res.json(show);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

const handleInput = async (req, res) => {
  const { name, description } = req.body;
  try {
      const newItem = await prisma.item.create({
          data: {
              name,
              description,
          },
          
      });

    //   console.log(req.body);
      
      res.json({ message: 'Item created successfully', item: newItem });

  } catch (error) {
      res.status(500).json({ error: 'Failed to create item' });
  }
};

// const updateItem = async (req, res) => {
//     const { id } = req.params;
//     const { name, description } = req.body;
//     try {
//         const update = await prisma.item.update({
//             where: { id: Number(id) }, 
//             data: {
//                 name,
//                 description
//             }
//         });
//         res.json(update);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to update item' });
//     }
// };

const deleteItem = async (req, res) => {
    try {
            console.log(req.params);
        
        const { id } = req.params;
        const deletedItem = await prisma.item.delete({
            where: {
              id: parseInt(id),
            },
          });
          res.status(200).json(deletedItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete item' });
    }
};


module.exports = { handleInput, deleteItem,  getData };
// module.exports = { handleInput, deleteItem, updateItem, getData, show };


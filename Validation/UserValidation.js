const Joi = require("joi");

const itemSchema = Joi.object({
  name: Joi.string().min(4).max(30).required().messages({
    "string.base": "Nama harus berupa string",
    "string.empty": "Nama tidak boleh kosong",
    "string.min": "Nama minimal 4 karakter",
    "string.max": "Nama maksimal 30 karakter",
    "any.required": "Nama harus diisi",
  }),
  description: Joi.string().min(10).max(100).required().messages({
    "string.base": "Deskripsi harus berupa string",
    "string.empty": "Deskripsi tidak boleh kosong",
    "string.min": "Deskripsi minimal 10 karakter",
    "string.max": "Deskripsi maksimal 100 karakter",
    "any.required": "Deskripsi harus diisi",
  }),
});

const validateItem = (req, res, next) => {
  console.log("Data yang diterima:", req.body);
  const { error } = itemSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateItem;

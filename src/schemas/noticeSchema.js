import BaseJoi from "joi";
import JoiDate from "@joi/date";
const Joi = BaseJoi.extend(JoiDate);

export const noticeSchema = Joi.object({
  title: Joi.string().min(2).max(48).required(),
  photoURL: Joi.string().uri().required(),
  name: Joi.string()
    .min(2)
    .max(16)
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, "Only letters can be accepted")
    .required(),
  breed: Joi.string()
    .min(2)
    .max(24)
    .regex(/^[a-zA-Z]+$/, "Only letters can be accepted")
    .required(),
  sex: Joi.string().valid("male", "female").required(),
  birthDate: Joi.date().less(Date.now()).format("DD.MM.YYYY").required(),
  location: Joi.string()
    .regex(
      /^[a-zA-Z]+(?:-[a-zA-Z]+)*,\s*[a-zA-Z\s]+$/,
      "Should be at least two words separated by string"
    )
    .required(),
  comments: Joi.string().min(8).max(120).required(),
});

export const noticeSellSchema = Joi.object({
  title: Joi.string().min(2).max(48).required(),
  photoURL: Joi.string().uri().required(),
  name: Joi.string()
    .min(2)
    .max(16)
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, "Only letters can be accepted")
    .required(),
  breed: Joi.string()
    .min(2)
    .max(24)
    .regex(/^[a-zA-Z]+$/, "Only letters can be accepted")
    .required(),
  sex: Joi.string().required(),
  birthDate: Joi.date().less(Date.now()).format("DD.MM.YYYY").required(),
  location: Joi.string()
    .regex(
      /^[a-zA-Z]+(?:-[a-zA-Z]+)*,\s*[a-zA-Z\s]+$/,
      "Should be at least two words separated by string"
    )
    .required(),
  comments: Joi.string().min(8).max(120).required(),
  price: Joi.number().greater(0).required().required(),
});

// Joi.array().items(Joi.string().required(), Joi.string().required());

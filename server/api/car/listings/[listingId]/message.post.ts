import { PrismaClient } from "@prisma/client";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string()
    .length(11)
    .pattern(/^[0-9]+/)
    .required(),
  name: Joi.string().required(),
  message: Joi.string().min(20).required(),
});

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (event.context.params) {
    const { listingId } = event.context.params;
    const { error } = schema.validate(body);
    if (error) {
      throw createError({
        statusCode: 412,
        statusMessage: error.message,
      });
    }
    const { message, email, phone, name } = body;
    return prisma.message.create({
      data: {
        message,
        email,
        phone,
        name,
        listingId: parseInt(listingId),
      },
    });
  }
});

import joi from "joi";

export const ValidateOrderId = (orderId) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(orderId);
};

export const ValidateNewOrderId = (neworderId) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(neworderId);
};
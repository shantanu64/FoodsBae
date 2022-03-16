import joi from "joi";

export const ValidateRestaurantID = (resId) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    });

    return Schema.validateAsync(resId);
};

export const Validatecategory = (category) => {
    const Schema = joi.object({
        category: joi.string().required(),
    });

    return Schema.validateAsync(category);
};


/* eslint-disable max-len */
/* eslint-disable no-return-await */

export const joiHandler = async (schema, req, res, next, reqObj = {}) => {
  try {
    const { noQuery, noParams } = reqObj;
    const queryBody = noQuery ? {} : req.query;
    const paramsBody = noParams ? {} : req.params;
    const filtered = await schema.validateAsync({
      ...paramsBody,
      ...queryBody,
      ...req.body,
    });
    req.filtered = filtered;

    next();
  } catch (error) {
    return res.status(422).send({
      status: 422,
      message: error.message
    });
  }
};

export const mustNotBeEmpty = (data) =>
  Object.keys(data).every((e) => !data[e]);

export const validate = (schema, reqObj) => async (...arg) =>
  await joiHandler(schema, ...arg, reqObj);

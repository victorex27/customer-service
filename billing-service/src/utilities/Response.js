class Response {
  static error(res, code, message, data) {
    res.error = message;
    return res.Res.status(code).encryptAndSend({
      status: code,
      message,
      data,
    });
  }

  static success(res, code, data, message, dataName, forceMsg = false) {
    return res.Res.status(code).encryptAndSend({
      status: code,
      message: forceMsg === 'forceMsg' ? message : 'Successful',
      [dataName || 'data']: data,
    });
  }
}

export default Response;

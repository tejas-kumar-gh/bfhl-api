function success(res, email, data) {
  res.status(200).json({
    is_success: true,
    official_email: email,
    data
  });
}

function error(res, code, message) {
  res.status(code).json({
    is_success: false,
    error: message
  });
}

module.exports = { success, error };

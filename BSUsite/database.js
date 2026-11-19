export function sendServerError(res, message, error) {
  console.error(message, error);

  const body = { error: message };

  if (process.env.NODE_ENV !== 'production') {
    body.details = error instanceof Error ? error.stack : String(error);
  }
  return res.status(500).json(body)
}

export function initializeDatabase() {

  return 0;
}


const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - 404</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: black;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
        }

        .error-code {
            font-size: 2.5rem;
            color: #e74c3c;
            font-family: monospace;
        }

        .error-message {
            font-size: 1.5rem;
            color: #555;
            margin-top: 10px;
        }

        .back-link {
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
            margin-top: 20px;
            display: inline-block;
        }

        .back-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="error-code">Wrong API URL</div>
        <div class="error-message"><em>Oops! It seems you've taken a wrong turn.</em></div>
        <!-- <a href="/" class="back-link">Go back home</a> -->
    </div>
</body>
</html>
  `)
});

module.exports = router;
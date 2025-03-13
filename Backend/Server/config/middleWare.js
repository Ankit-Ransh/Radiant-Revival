const { express, cors, bodyParser, path } = require("./imports")

const server = express();

server.use(
    cors({
        origin: "*", // Replace "*" with specific domains for security
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
server.use(bodyParser.json());

// Set the views directory to a custom location
server.set("views", path.join(__dirname, "../views"));

// Set the view engine
server.set("view engine", "ejs");

// CORS middleware
server.use((req, res, next) => {
    // Replace '*' with the appropriate origin(s) or configure it dynamically
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Add other allowed methods as needed
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

    // Add other allowed headers as needed
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight request
    if (req.method === "OPTIONS") {
        res.sendStatus(204);
        return;
    }

    // Set cache-control headers to prevent caching
    res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    next();
});

module.exports = server;
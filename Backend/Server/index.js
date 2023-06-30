// Cors and server
const server = require("./config/middleWare")

const register = require("./auth/register")
server.use('/register', register)

const checkUser = require("./auth/isExistingUser")
server.use('/checkUser', checkUser)

const login = require("./auth/login")
server.use('/login', login)

const emailVerify = require("./auth/emailVerify")
server.use('/verify/:id', emailVerify)

const forgotPassword = require("./routes/forgotPassword")
server.use('/forgotPassword', forgotPassword)

const updatePassword = require("./routes/updatePassword")
server.use('/updatePassword', updatePassword)

const profile = require("./routes/profile")
server.use('/profile', profile)

const updateProfile = require("./routes/updateProfile")
server.use('/updateProfile', updateProfile)

const customerOrders = require("./routes/customerOrders")
server.use('/customer_orders', customerOrders)

const myOrders = require("./routes/myOrders")
server.use('/myOrders',  myOrders)

const cancelOrder = require("./routes/cancelOrder")
server.use('/cancelOrder',  cancelOrder)

const stripe = require("./services/stripe")
server.use("/stripe", stripe);

server.listen(8080, () => {
    console.log("Server Connected");
});



const express = require(`express`);
const app = express();
const PORT = 3030;
const cors = require(`cors`);
app.use(cors());
const userRoute = require('./routes/user.route');
const transaksiRoute = require('./routes/transaksi.route');
const mejaRoute = require('./routes/meja.route');
const menuRoute = require('./routes/menu.route');
const detail_transaksiRoute = require('./routes/detail_transaksi.route');

app.use(`/user`, userRoute);
app.use(`/transaksi`,transaksiRoute);
app.use(`/meja`,mejaRoute);
app.use(`/menu`,menuRoute);
app.use(`/detail_transaksi`,detail_transaksiRoute);

app.listen(PORT, () => {
  console.log(`Server of Ridhos Cafe runs on port  ${PORT}`);
});

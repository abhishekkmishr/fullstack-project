import axios from "axios";

// ================= Products Data Fetching Start here ===============
export async function productsData() {
  const response = await axios.get(
    "https://api.opxpress.sushant.fun/api/products?limit=800"

  );
  return response.data.data;
}
// ================= Products Data Fetching End here =================




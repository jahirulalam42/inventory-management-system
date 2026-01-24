import axios from "axios";

export async function getDashboardData() {
  try {
    const response = await axios.get("http://localhost:4000/dashboard");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

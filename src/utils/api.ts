import axios from "axios";

export async function getDashboardData() {
  try {
    const response = await axios.get("http://localhost:4000/dashboard");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getInventoryData() {
  try {
    const response = await axios.get("http://localhost:4000/inventory");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getReportsData() {
  try {
    const response = await axios.get("http://localhost:4000/reports");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSuppliersData() {
  try {
    const response = await axios.get("http://localhost:4000/suppliers");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getOrdersData() {
  try {
    const response = await axios.get("http://localhost:4000/orders");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getManageStoreData() {
  try {
    const response = await axios.get("http://localhost:4000/manageStore");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

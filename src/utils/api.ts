import axios from "axios";

export async function getDashboardData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/dashboard`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getInventoryData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/inventory`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getReportsData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/reports`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSuppliersData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/suppliers`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getOrdersData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/orders`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getManageStoreData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/manageStore`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

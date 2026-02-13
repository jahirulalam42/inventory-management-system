import axios from "axios";

export async function getDashboardData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/dashboard`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getInventoryData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/inventory`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getReportsData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/reports`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getSuppliersData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/suppliers`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getOrdersData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/orders`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getManageStoreData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_RENDER_EXTERNAL_HOSTNAME}/manageStore`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

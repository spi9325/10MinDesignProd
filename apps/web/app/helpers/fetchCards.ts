import axios from "axios";

export async function fetchCards(
  page: number,
  items: number,
  categoryName: string,
) {
  console.log("&&&&&&&&&&&&&&&&&&&&&&&")
  const res = await axios.post(
    `http://bee.10mindesigns.shop/wedding/get`,
    {
      page,
      items,
      categoryName,
    },
    {withCredentials:true}
  );
  console.log(res)
  return res.data;
}

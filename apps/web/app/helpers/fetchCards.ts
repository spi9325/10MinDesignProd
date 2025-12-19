import axios from "axios";

export async function fetchCards(
  page: number,
  items: number,
  categoryName: string,
) {
  console.log("&&&&&&&&&&&&&&&&&&&&&&&")
  const res = await axios.post(
    `http://backend-auth.default.svc.cluster.local:8080/wedding/get`,
    {
      page,
      items,
      categoryName,
    },
  );
  const res2 = await axios.post(
    `http://bee.10mindesigns.shop/wedding/get`,
    {
      page,
      items,
      categoryName,
    },
  );
  console.log(res2)
  return res.data;
}

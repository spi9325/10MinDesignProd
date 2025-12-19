import axios from "axios";

export async function fetchCards(
  page: number,
  items: number,
  categoryName: string,
) {
  console.log("&&&&&&&&&&&&&&&&&&&&&&&")
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_Backend_URL}/wedding/get`,
    {
      page,
      items,
      categoryName,
    },
  );
  console.log(res)
  return res.data;
}

// 6. Jewelery store (3p)
// Visa en lista av smycken från apiet:
// https://fakestoreapi.com/products/category/jewelery
// I listan visas title och en liten bild för varje smycke.
// Bilden ska vara högst 300px bred.

// Om man klickar på ett smycke visas dess detaljsida.
// Där kan man se title, description och image (i orginal-storlek).
import Link from "next/link";

export default function Question6({ storeData }) {
  return (
    <div>
      <h1>Question 6</h1>
      {storeData.map((item, index) => (
        <div key={index}>
          <Link href={"/jewelery/" + item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} style={{ width: "300px" }} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const data = await response.json();
  return {
    props: { storeData: data },
  };
}

// Duotas objektų masyvas.Išrūčiuoti prekes pagal:
// 1.) atsiliepimų kiekį
// 2.) pagal kainas (jeigu kainos DataView, tai imti newPrice)
// atsakymus išvetsi į puslapį paspaudus atitinkamą mygtuką

const items = [
    {
        ratingRevievs: "264 atsiliepimai", price: { oldPrice: "333 EUR", newPrice: "3 799 EUR" },
        name: "Motorola MOTO G4 (XT1622) Black"
    },
    {
        ratingRevievs: "1355 atsiliepimų", price: "999 EUR",
        name: "Samsung Galaxy J7 J700H/DS Black + atminties kortelė 16gb + dėklas + apsauginis stiklas!"
    },
    {
        ratingRevievs: "426 atsiliepimų", price: "1 199 EUR",
        name: "Samsung Galaxy J5 (2016) J510H/DS Black + apsauginis stiklas + dėklas!"
    },
    {
        ratingRevievs: "403 atsiliepimai", price: "349 EUR",
        name: "Xiaomi Redmi Note 4X 3/32GB Black"
    },
    {
        ratingRevievs: "488 atsiliepimų", price: "1 199 EUR",
        name: "Samsung Galaxy J7 (2016) J710F/DS Gold + apsauginis stiklas + dėklas!"
    },
    {
        ratingRevievs: "198 atsiliepimų", price: { oldPrice: "295 EUR", newPrice: "235 EUR" },
        name: "Lenovo K5 (A6020a40) Silver"
    },
    {
        ratingRevievs: "352 atsiliepimai", price: { oldPrice: "1 799 EUR", newPrice: "1 699 EUR" },
        name: "Apple iPhone 5s 16GB Space Gray"
    },
    {
        ratingRevievs: "59 atsiliepimų", price: "999 EUR",
        name: "Nokia 5 Dual Sim Tempered Blue"
    },
    {
        ratingRevievs: "119 atsiliepimų", price: "1 999 EUR",
        name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + atminties kortelė 128gb!"
    },
    {
        ratingRevievs: "1106 atsiliepimų", price: "899 EUR",
        name: "Samsung Galaxy J5 J500H/DS Black + dėklas + apsauginis stiklas!"
    },
    {
        ratingRevievs: "380 atsiliepimų", price: "499 EUR",
        name: "Huawei Y3 II Tiffany (White-Blue) + dėklas + apsauginis stiklas!"
    },
    {
        ratingRevievs: "86 atsiliepimai", price: { oldPrice: "2 999 EUR", newPrice: "2 699 EUR" },
        name: "Samsung Galaxy S8 64GB Midnight Black + atminties kortelė 64gb + оригинальный dėklas!"
    },
    {
        ratingRevievs: "177 atsiliepimų", price: "499 EUR",
        name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + apsauginis stiklas + dėklas!"
    },
    {
        ratingRevievs: "347 atsiliepimų", price: "299 EUR",
        name: "Xiaomi Redmi 4X 3/32GB Black"
    },
    {
        ratingRevievs: "709 atsiliepimų", price: "299 EUR",
        name: "Samsung Galaxy J1 2016 SM-J120H Black + apsauginis stiklas + dėklas!"
    },
    {
        ratingRevievs: "527 atsiliepimų", price: "289 EUR",
        name: "Huawei Y6 Pro Gold + dėklas + apsauginis stiklas!"
    },
    {
        ratingRevievs: "66 atsiliepimų", price: "2 499 EUR",
        name: "Apple iPhone 6s 32GB Gold"
    },
    {
        ratingRevievs: "14 atsiliepimų", price: "1 499 EUR",
        name: "Apple iPhone 6 32GB Space Gray"
    },
    {
        ratingRevievs: "70 atsiliepimų", price: { oldPrice: "399 EUR", newPrice: "299 EUR" },
        name: "Asus ZenFone 2 32GB (ZE551ML) Black"
    },
    {
        ratingRevievs: "45 atsiliepimų", price: "299 EUR",
        name: "Nokia 3 Dual Sim Silver White"
    },
    {
        ratingRevievs: "376 atsiliepimų", price: "899 EUR",
        name: "Meizu M3 Note 32GB Grey"
    },
    {
        ratingRevievs: "111 atsiliepimų", price: { oldPrice: "999 EUR", newPrice: "799 EUR" },
        name: "Sony Xperia X Dual (F5122) White"
    },
    {
        ratingRevievs: "40 atsiliepimų", price: "222 EUR",
        name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"
    },
    {
        ratingRevievs: "93 atsiliepimai", price: "899 EUR",
        name: "Apple iPhone 7 32GB Black"
    },
    {
        ratingRevievs: "33 atsiliepimai", price: "699 EUR",
        name: "Huawei P10 4/32GB Black + dėklas Huawei Smart View Cover!"
    },
    {
        ratingRevievs: "71 atsiliepimas", price: { oldPrice: "299 EUR", newPrice: "199 EUR" },
        name: "LG K5 X220ds Gold"
    },
    {
        ratingRevievs: "39 atsiliepimų", price: "295 EUR",
        name: "Lenovo C2 Power (K10a40) Black"
    },
    {
        ratingRevievs: "156 atsiliepimų", price: "299 EUR",
        name: "Nous NS 5006 Gold"
    },
    {
        ratingRevievs: "40 atsiliepimų", price: "1 989 EUR",
        name: "LG G6 Mystic White"
    },
    {
        ratingRevievs: "24 atsiliepimai", price: "595 EUR",
        name: "Motorola MOTO G5 (XT1676) Grey"
    },
    {
        ratingRevievs: "7 atsiliepimų", price: { oldPrice: "1 099 EUR", newPrice: "999 EUR" },
        name: "HTC One X10 Dual Sim Silver"
    },
    {
        ratingRevievs: "18 atsiliepimų", price: { oldPrice: "599 EUR", newPrice: "499 EUR" },
        name: "Sony Xperia L1 Dual Black"
    }
];

function sortByFeedback(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    //objekto kopija. Stringify pavercia i json, parse atgal i objekta

    temp.forEach(item => {
        item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, '');
        if (typeof (item.price) === "string") {
            item.price = +item.price.replace(/\D/g, '');
        } else {
            item.price = +item.price.newPrice.replace(/\D/g, '');
        }
    });

    temp.sort((a, b) => a.ratingRevievs > b.ratingRevievs ? 1 : -1);

    document.getElementById('sortedItemsList').innerHTML = '';

    temp.forEach(item => {
        document.getElementById('sortedItemsList').innerHTML += `
            <h3>${item.name}</h3>
            <div> Price: ${item.price}EUR</div>
            <div> Feedbacks: ${item.ratingRevievs}</div>
        `;
    });
}

function sortByPrice(arr) {
    const temp = JSON.parse(JSON.stringify(arr));

    temp.forEach(item => {
        if (typeof (item.price) === "string") {
            item.price = +item.price.replace(/\D/g, '');
        } else {
            item.price = +item.price.newPrice.replace(/\D/g, '');
        }
    });

    temp.sort((a, b) => a.price > b.price ? 1 : -1);

    document.getElementById('sortedItemsList').innerHTML = '';

    temp.forEach(item => {
        document.getElementById('sortedItemsList').innerHTML += `
            <h3>${item.name}</h3>
            <div> Price: ${item.price}EUR</div>
            <div> Feedbacks: ${item.ratingRevievs}</div>
        `;
    });

}

document.getElementById('sortByFeedback').addEventListener('click', () => sortByFeedback(items));
document.getElementById('sortByPrice').addEventListener('click', () => sortByPrice(items));
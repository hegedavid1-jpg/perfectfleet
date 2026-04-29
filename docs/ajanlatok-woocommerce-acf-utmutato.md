# Ajánlatok kezelése WooCommerce + ACF alapon

Ez az útmutató rögzíti, hogyan épüljön fel később a WordPress oldalon az autóajánlatok kezelése. A demóban az ajánlatkártyák statikus HTML elemek, éles oldalon WooCommerce termékekből és ACF mezőkből kell őket kirajzolni.

## Alapelv

Egy autó egy WooCommerce termék legyen. A WooCommerce adja a publikálást, termékoldalt, képet, kategóriákat és az alap rendezhetőséget. Az ACF adja az ajánlati mezőket, például havi díj, verzió, badge-ek és konstrukciós adatok.

## WooCommerce-ben tároljuk

- Termék neve: például `Kia EV3`
- Termékkép és galéria
- Termékkategória: például `Elektromos autó`, `Kishaszonjármű`, `Kombi`
- Alap ár, ha ár szerinti rendezés vagy WooCommerce árlogika kell
- Rövid leírás és hosszú termékleírás
- Publikálási státusz

## Taxonómiák vagy attribútumok

Szűréshez és listázáshoz ne sima ACF mezőt használjunk, hanem taxonómiát vagy WooCommerce attribútumot.

- Márka
- Karosszéria
- Hajtás
- Elérhetőség
- Üzemanyag
- Váltó
- Ajánlat típusa

## ACF mezőcsoport: Autó ajánlat

Javasolt mezők:

- `pf_model_variant` - modellverzió, például `Long Range`
- `pf_monthly_fee` - havi díj számként, például `291990`
- `pf_price_suffix` - ár utáni szöveg, például `Ft / hó, nettó`
- `pf_badges` - ismétlő mező vagy checkbox lista, például `100% elektromos`, `Azonnal elérhető`, `Rendelésre`
- `pf_availability_status` - elérhetőség: `azonnal`, `rendelesre`, `egyedi`
- `pf_power` - teljesítmény
- `pf_range` - hatótáv
- `pf_contract_duration` - futamidő
- `pf_annual_mileage` - éves kilométerkeret
- `pf_down_payment` - kezdőrészlet
- `pf_featured_offer` - kiemelt ajánlat igen/nem
- `pf_offer_order` - kézi sorrend
- `pf_offer_cta_url` - részletek vagy ajánlatkérés link
- `pf_offer_card_image` - opcionális kártyakép, ha eltér a termékképtől

## Ajánlatlista kirajzolása

Az ajánlatlista WooCommerce product query legyen. A kártya a következő adatokat jelenítse meg:

- Kép
- Badge-ek
- Autó neve
- Modellverzió
- Havi díj ezres tagolással
- Ár suffix
- Részletek gomb

A demóban ehhez az `offer-grid`, `offer-card`, `offer-badge` és `offer-promo` osztályok készültek az `index.html` és `assets/css/styles.css` fájlokban.

## Termékoldal minta

A statikus demóban az első autó termékoldala az `auto-kia-pv5.html`. Éles WordPress oldalon ez WooCommerce single product template legyen, ACF mezőkkel kiegészítve.

A termékoldal fő blokkjai:

- Nagy hero kép vagy galéria
- Morzsanavigáció
- Autó neve és modellverzió
- Sticky ajánlatkérő/kalkulátor kártya
- Műszaki adatok
- Havidíjban foglalt szolgáltatások
- Visszahívás űrlap
- Rövid futamidős/flex CTA
- Kapcsolódó ajánlatok

Javasolt termékoldal ACF mezők:

- `pf_gallery_hero_image` - nagy termékoldali hero kép
- `pf_contract_default_months` - alap futamidő
- `pf_contract_options` - választható futamidők
- `pf_mileage_default` - alap éves kilométer
- `pf_mileage_options` - választható éves kilométerek
- `pf_included_services` - havidíjban foglalt szolgáltatások ikon/szöveg listája
- `pf_related_offer_ids` - kézzel kiválasztott kapcsolódó ajánlatok

## Javasolt WordPress sablonlogika

1. WooCommerce product query lekéri az aktív ajánlatokat.
2. Rendezés először `pf_featured_offer`, utána `pf_offer_order`, majd ár vagy dátum szerint.
3. A kártya template ACF mezőkből olvassa az ajánlati adatokat.
4. A szűrők taxonómiákból és attribútumokból épülnek.
5. A részletek gomb a termékoldalra vagy dedikált ajánlatkérő URL-re mutat.

## Admin feltöltési folyamat

1. Új WooCommerce termék létrehozása.
2. Terméknév, kép, kategória és leírás kitöltése.
3. Márka, hajtás, karosszéria és elérhetőség attribútumok megadása.
4. ACF ajánlati mezők kitöltése.
5. Kártyakép ellenőrzése.
6. Publikálás előtt előnézet az ajánlatlistában és termékoldalon.

## Fontos szabály

Ami szűrhető, kereshető vagy listában csoportosítható, az taxonómia vagy WooCommerce attribútum legyen. Ami egyedi ajánlati adat, az ACF mező legyen.

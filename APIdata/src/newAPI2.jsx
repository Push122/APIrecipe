import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import About from "./About";
import Next from './Next'
import Allinfo from "./Search";



const NewAPI2 = () => {
  const [data1, setdata] = useState("");
  const [count, setcount] = useState(true);


  const [home,showhome] = useState(true)
  const [about,showabout] = useState(false)
  const[next,shownext]=useState(false)
  const[info,showinfo]=useState(false)
  console.log(data1);

  const createAPI = async () => {
    const NEWAPI = await axios.get("https://dummyjson.com/recipes");

    setdata(NEWAPI.data);
    setcount(false);
  };
  useEffect(() => {
    createAPI();
  }, []);

  return (
    <>
      <div className=" border-x-white ">
        <div className=" mt-1 border bg-slate-200 shadow-2xl shadow-blue-200 ">
          <img
            className=" ml-2 h-16 w-16 border rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkQ1nsyaVbXF3bS1UGl-TcMbm1klHohjDKw&sdata:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhQWFRUXFxgaGRcVGRsYHxkeHR0bIBoeHRsaIiggIR4lGxkbITEtJSorLi4uGx8zODMsNygtLisBCgoKDg0OGxAQGy8lICUtLy01LS0tLS0tLTUtLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABQMEBgIBBwj/xAA/EAACAQMDAgMGAwYFAwQDAAABAhEAAyEEEjEFQRMiUQYyYXGBkRRCoSNSscHR8DNygpLxJGLhBxUWQ1Oisv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAgIBBAIBBQAAAAAAAAABAhESIQMxQQRRYfATgSIUMnGR0f/aAAwDAQACEQMRAD8A+G0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH1r/ANMSg0m63aAbxdt67cYDMOwKSeybQRj3mOYwq/8AVO1bVLBe14eoYAzbbdbKbciQYJDFQIGQJPIqT2Nu3bejuJa03iOxJLM+wKCoUED1jcMke9juQr9v71y9sZrRRkkMA24ZC7SMDhVCevkE1OMcro2uWDVmKoooqjEKKKKACiiigAooooAKnFr9nuz70fDj5z+lQU5/DL+B8Te8+Nt2eTbO2Z9/f7vfaB2oATUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU06XpDuBiWJhQe3xqTo3TCblosJVla4B67SwA/3KPvWs6b0cqwcqcA+Y8e6384E/GolyRj2dfB6WfJtLQh0+svBWZGICwTn1MCvbepd9zuZBIBnuY/pV/Ufs3a2LTG2PLcifMVPbthuPWDTVugnCbfKzBgR6FTtb6/1qJcqj2b8PpXKTxfRguq6PY0j3WyPh6j6VRredQ6C62W3CQVMTypgkfqAKxf4Q+F4v5d+z6xP8KqHJGS0zD1Pp5cUuuyvRRRWhyBRRRQAUUUUAS6dQWG7A71obnXbP4T8L4TQUXz7hIcXC5MekNs+QB+FJtP064wkDHxxPymrbdCuxO0/Zv6UDSYnoq7qOl3U5X+v2OapUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqxo9K1xgqiSeB64n+VV61v/AKcX7VvVC5cDMyAsiBVYMYO4NuB4Ukj4j5U0CNZ7E+zBe8iiAbaRkMdyb1LYEj3t0e7E96+oaPolqxm4fEkQVMAGVIMKMZge8Tlu1Itb7U3FvW9Pbs7XcDzuFGCAc7BBzA7cqe9IPaK7qiybr5XegMGVgzGNoJiR9KlcMbya2dE/UTksYul7DQ9Z6erNb/D2tpYCfPMkTBM8k8f5hWo0ml0tyzbFoohADDzNOFITzZlQrGAQcHivnWrs2hc/+4+60jaJKi2B5YODvkyeTVLW3Ltu4Ba1GC6qI3DtBlSNsmPjmrcI+xlnP3Z9B1/spcZCmCPKNzDdgZMsncjGV9K+N9R9m2W2bKANtO7dnL/mHPpAmIgT8a+iXeu6uwrP5mCleZE4BJUjtHJ+B+Bphpva3dp9/gHbuKABbefSQ3wn9D88VwxjuOjoXqZSVcm/uz88EV5TDrlm0t51sMzW1MKzgAmOZiO80vrVnIFdIhJAHJrmmPSdGWPiE7VXEkTJIMAfxpDSsXVZ0AHiKW90MpPyBE/pTdPZ03P8MndEwAWBGM4yORzU3Qemslxbjr5EbzAjBj+Rj7UWilBm+udO8PTXL1vTl0UkeK7Lbtt2kTlhOBjMcnmp9H0y4+j8f/oVgT/iH44IA54+9ZDrHtNcuRaAdkksockqZklgG8oGe2KV6jqN4NBUf6YAwMyIEYzkCps2zkutfo2vUOnXV0yaprFs2iPe09wPnaSo2QGywC94ma+RVrh1i7bdN6yF88L/ANomeAQRg5Hp2NLtb0ZGO6w4g/kcgET2n/ihMjkykIqK6dCMEEfOuaoxCiiigAooooAKKKKACiiigAooooAKKKKACiiu7tsqYIg0AcUUUUAFFFFABWn9hk/6pDAMLcwZifDYCYOfMQPrWZUVuvZvTNphavgftJVwTAVQOFJOCTyRP8Kd0VFWfUbZtnWJe1JFsKbokAqItsQqsYiIgCfuau6nqml1F+0tkPtUFWuKhbGNuQOOe/pSG/7Vpq0D6kQ1tjttpZLliYBM+6MjBP8AOqCe1Qt7w1tfFWdhZyQoPEqoImCBPqTxVZIWD9hv1Xr/AE1G3G3e2GVFwGM+U4HoNtsTHaO9R9e6lpU/D3EL3Lb3A5AQ+VCCRMjnj+orHaTq90s9zWKHtACLYVDtz2lTtH6/aodZq/EtlrapbFuGUAtknAA3Ex5QeIGOKTaRSg2b7Ua3R39K7oWmFkKQMoI755ZeJ5FK9OuyytrYjKdjwUAz+135AmT5RM/ac/P71u7fZUDHfyQWOOfWOwP2q77V3NUTaOruO7orLaCkLG0icrnJjM5+lK9DxZjtWgGT3+pqC3pWb3FY/EDH3rQW7FzBSwsTiFLnv38x9Ksp0K+9s3n3BFPM+VcyASu74cgVLkPAz+j6SzttLKp+Jn/+Z/sU/NhiRbtoPDUkKWxiD5sxJJzx3+FTabRJvsojD93dt253CCMycnvHyq0uvQXfCW3vubmWWMyVBk5MZ54qbLwpHnQdHfDsVvbH8I+5IiLiE8R+Xy8Up6t1C5dQqS5G7EiBwuBHOZp/0vqep8zqm0C2p2wRMusgARwB+tK+rXP+mBK7G3rtxyoXDfelex1/Ee3el/t7LEBU2lsjbIW2jBjOZDEmY7D0qvc6SRd0y3GUtNwPLHJHmtg47FhEcTWh17WRf0puPuDWLgbaC5XfbRZIHBO01x1nU6dtbZKC4bam6zOLbAAlVCRjjyCudTf39m7ivv6EfUeklVHiebbpbm9gdw3AlOQMbS57dj6CEFvpzziIdoUsQVHKiWGO/eDg4r6B7QXrB/EeE/lXTkAkFJ36gsQAefL+hr59r7gOyFC+cGRjcN7Qf5VpxtmfIkLkuMqhHUMArxIkdo+xH8aivJaLQEgGO5wYExzIz6VeslGVQdwJQgkGSeATBry5opurALKcyBtHA71qZUVrfS1z55Egdv5fMUtv6Z095SPjGPvWjHTCEkNBNyM9oIjzD4CjTICby3Q8E5KH0DTPbMfwoTBwTMtRWi1ns8u4i3eXdElH8pyAcHg8ilOs6Xetf4iMB6xI+4xVWjJwaKdFFFMkKKKKACiiigAooooA7t2yxgCT6CmvtZoza1VxSDjZExmUUg4AHBqXpXSb0LdRWyfKVMSR/wCR+lS9c8RwFvEl0UBS2SABhZOYjt2oLUW0Z2iu7SSwHqQKt2ensQw2ksIMAEmMzx8Y/WglJspBTE9v7/pUngHHxEj7kfxBrS6PpC+CzOAC5VVDkKAUBLN6/u/duaZbLINlBlbaqW2qYYk7mEn1OPlFTkjVcL8lHpnRLVtla4Sc4UKCQAf+7Ex8DTjVaBriG9bUG0GKhTyQJws/uqB6zxjNXbSLdKG5jaEDeKGJLPcckKqlZ8vnzuGfnWifSD/oUCLG9m8oVR5jEwMAnd6cHuTWMptG6gukYRuo6g20RlZQVKjxD4eS2D5oJgegPNR6hiGuKpCmVBLGYUAGFgZJJn6U49oOmImlvOBbxsTcoJZmU5csQOWbHOAOKh6aocaqVZilvcLhBJT9mzySMyWAEkwJ4p5aseLen97FOme6ybSCFmTH5omNzcAAfxNdafo73d5VpVJZgrCFBOBKyCcQMgmmPQrh/Daze4MWdxLHzGVGwCckbnBgele+zt+3at3i7FQbdt0AAYM+2YMnyySRJHfFDm1dAoXVi7o2ntNctIGZQWcFz5YAALExJPJ75+E1L1ayLWoIVRtADkso3RjkMWE5HFRdMUoiXSFKC6BGGk7XkGDjBHHpVm5dOq1GpuLbCjaALSqQMlQoDAz2JnHBnvQ57+ClxvWiz7Y6gu6ILLWUG5UJ3DxFDbQ3m54BkfvfCnFnTt/7Y9xrlvw7atbVd0MGNxpO0CMjBk9jSXrKai5qNO+qVvDQAec5CjMYPunAq7rtF4umYtqCpALwEMqA5SN0gMJP15io/JGki/wz26Emjs77lobWOBAjbukjgnEfH402tWkQbgSBLrCgSCqsSCe8BYmPSlOivLauMdzFkXykR+UkT5vlVW62odm2h9u6+cnaDKnaewOSc/rW0XZhyfx0a7RrbV2XaTutKeT+a4q9o4HmrJdSNuECecqylpkqYHmBPunMA13oel3iWY7cLaJzPulN2RI5+NVdYhDbmuDzFiADJglmAxgCI+1Hkzb0a3Ve0GmXaoB2lJIHCzAClRA5Pb+FLE9p02km35gZA9YKyTnncd3zzS6z00vshLjzbkiIPlK5B9MD6zVe3oybTvsYgNG/0kriCflUqMSspD49ct3LTKibmKRB4JJIaRPbJ7fCk/UraRb3KyHYsBTgHc5iGzH1rhtKLYUuGtiAZI7knPaBNSXHvLbA8QMrZHmWSrbzI3ebg/Omkl0NtvsqrYJQYB/Yp+vr/far/Q9T4OsHkJ2lhBYj3rZGRnsZ+gqjpLkKS4IhEgjGPT0xVzT3La6nxdxkGSCs8rHI+c0+9CXhjU3NyFkALnUNt7cM0iBMwAeYn4cVT6fp1N247FxOCAAIYmAQe4Hpj41e0l5ZTgxfuM208K3ibRmMglRUPQLZN7UBUMEz5oiAz7QN3LNk49O1C0N7aIl6e723u3FVTa4PJbbBlR9AYLHioLKuu24hcWmJAiYaPQPG4wOwPJpn0y6TYubBvMuZteXLrCggqPMfl9641ahkRLhwxtA27gZCGIycYnJHA9D60xCHUWbTl/FthSoLTbhGYdvLkbszFVLnRbM4vgA5h1M/oYrR9bcHUWwCBb2eaNpUhfuAcRIEYHpS/W6IeIwtqCoMA74MRIkENnPrTTJlEx1FFFUc4UUUUAFdJyK5ru0MigD6l7M+0lq1prSbbnlZi3mKqZkgAhTBBO7kz8Jwo1/SRc3XnLqdyh2wR5slvX7elXuj6Gelm8QSFvFJmACxtEE+sSfjk1HbdjYunhN6EqVknnbnmQfhWMpvZ3cUE6TEtjoTKviKlsINsu8mNwkCGIXIntnNalekO19LLslpkQvgSDgEBpgTwAAMEmfgq011vw9/TbX3goy2xnACqdw5JHlgD1pldu6jxV1NrT5NpgyXD+bIJIcqRJBIAwAKznNeTSHE0tIraOzau2r7sP2qBWQOeSZ3N5dsEgDj1+GZuoXAlrRXVTw92XYeXxM5yonaJC898mak6V0xlRj4o8BxaS75m3MVVYERAi7HBGBXdjoyApaZ3u71QqVXabY3ZgDdAO4TEe6KzfNE1Xp5Mvm7OvvE4U7CfCUFS2yIUghcsVX0mo26bq7hts96zatqIXbLswABKwB7zEdyJ3fGqnsnaVdXdtKsAHe25oaUVzkjaYDKD2zzVtl3dRVCcJqUA8pO1YG7McSQf9NX2YtU6K/tKrLonswrAMLpKDafPwhfzAEKox33LxIlOOiX9t7wLqbGVVYtcI3gIpggYIzH0mm3tFfRtGyFz4nik7GIUKCVgkscT5oxmKq6DrWlXTNb8wu7QAWbAYFt2A2QUKjjt25qJykkqNuGEZNqRXudDt3bd24l0qqBAFCz+RIIae8zj1q62kt3ER207MDbUFv2gG1UYAmMEbkC57tUej65Gnaz+FgFFXeLTEnbJ3cd5C57LXug6jr1tG34Ra2U25a3JWS5kkTySZEYrJuf1nWowvSOfZLT32lLEIEaYJ93xFZBkgsfOUOewP1ZavOs8K/etoUtrvnI3Kvm52iGIjmeMVmek6O4VLC9bsbJ3rtYkwGYTEgwFYjJ49Yq3f6aGZ11GouP5UceENsg+s/5gfXn6kksrbHFyrS+/fgve2Zts9ohxc3JbnbChCFCwZnjbPrVzXajSfgrvg7N/m2sXuGU3ScHJG8HtNIOp9Ks2blvNy754K3WkHO3tB+NPPwloWHnRWlhPK3htljeZCsnH+GFMc5mjSS7MpqT0JemaU3bylXHmQMYtAhQGMyWYGAcYB+VW7CqRuCyxZxycxugwMeYgfQmrXSNNcZSlvYGazfG0lQd03wggngNBziklzSXT5PFg/tJgyc7wowewjHqK64M4eXvfyavp1jbduIyIisiqCVQ+YuN3OCdsc1W9qempYtDw38MxwvknBIkLjIB4AyOwxV/2F6Tuulb7FAVBDOu0NsMkAkx39ase1PTVvXTaWdQUTlNqCRgfnJgB2Az2HPeW3YklVGSs+azbJ3tsGwngyVttAOfLD+kzUun6L+0/DlSbhhuZEQOQRE89+1OP/amtWwjW/DAliGvwBsCKTCgnChM/AGpQWa/vO3eYQf9Vd3A7ZC79k/H0GRUtvwylXsZ+xZY2vEtsbQ3lPM0CUFwHIH2+Zqh1a04VHa3bcC2u4kRkBiSNpU81qX6Q7WwBb328vtS/IllHmAMHdO4n5isN1e5gbi6sLaIVA8uEUQW3fD0rSDsmekW9H08kSjgHaMA4GwzAntk5JqS3oyNSUfaxOdotwSCMFWUT9yO9Mek6nTNbUMvmkSY/KLQB93OXE/WqP4274jMiTAYKwBJ2qCVBIM8gelUmyWlRwmhVtohlJe5u2kMFI3RPxyARIgmrXQVcvc8xMXLZIfykDc8xu7cRB+g7zN1+Z3oDDErIBgjxMgHuQh/3dq96ZcQ3LzBztYqqr/+NjMkBgQckR2qtk6vRJ06+34UgrtW4XL+HBDeVuDlZ8q96YX7KGxYs24WfDO5lDbvFBMEHcpIIkExHHFUukWmGnYsoVpIRbO5Sed0EblBjcR5e3xw7eyVt2LzQNxSAyKzeQeUOyAPJBmYJ5GJigEZzq3TbY1NsWVKhrZIcOVKch8CVjngDnt2WX0dblxZLlWgnZPAAwQ0HEHtzxWh6npHt3V3JDJbZSFcEyTIhbhVjg/+cZXXb58S4ZYBnJG5WUwY+HFFio+b0V3atljCgknsKlvaG4olkYD4itLOamV6K6CmJ7Agfef6VzQIKlsDNcpbn0+tS2FMwKBpG19nNSTpriELClRJmTvYg/CRTYaxRp1O0ELdG+ASx9zbt+gaaX+zuiuLpSxB85ZvKMgKszJHBDH7Vd6Yly7avbdpCq7Hzf5IPPGW+WK5uRJp/wCT0OFtNX7DGx1VF09t7moJI2b0AypA7mcnewB/y1BrOq6bdc2i7dBU+HcEkDBUbtvcCZ+Yq1p0srp7F2dNbZtgfaihh5dxBAUEbjtHzry/1G1b8a3+IDNtISBAfyKu4QYG5p+xrg1bpff9HpxelsoaHWXxpltrpCMqy3WgBoO5d0nAJIHJ4HriVtRrbt63LWrNxUCiDuDLIaIUHMwe2Kpabq+m/DIoLtdG3cJmcguFxJMIkfGau6frA8e3cs6a44CAXFKuYMrnI/dTb/ebp319/ZFrHs59n9OTqrq3XBub5LICBHmZh2YztKmTAB9MVYeX1iWIaBfQEnO/duMEmeIHEe8M177Pu76q9cUNZJbYEIEqH3bjBGCqFjJOT9q9vz+NRwSbpvCYMbTIg7d3MDsOx9M9UetnBP8Au0c+0VonSG8VgF1QEmBAgDGBjcf7ApiOnONLcubbWwWzJC2wTwoOBPvK9UfaTRgaYMvlSU2T6/8A2MBtjzMFHP5fpXOs9mrlu0LhvuFuKzjyrkAZHJPr9ZrLlg2kzp4Jrr5GT3B+FuH8QH8ltgu4yRhYiefIWiPz0q6SmmNnd4rG6LYbbB98q6bSYP5G3c8kUvs9EtG01wXNQDz78Aykzx/p+lWOm+z9g2DcOmuTtUyPFj3DmZiNwiscUl2zoya38i32d6lpbRZdQoYPsgK8wBuDgkQJKMw/1duam1PtJZTUPctor2yhRUK7o5CycnywDHyzUvs5objrdS3ZtkqQAWCEqWDhRL5I37Psas3NM/4i5aU27bBPMshY2Zb3fkR960eOT/6Sm8XsTe0ftILzWnQeGV2LAUqCQZBM85Fde0PWdY1m2ly0yq94N+YhiZ8uWP8AX4029sdMBetbzbk7eBv7rjj51F7XaZV0+lVXVwuqjyDlScRB4niK0hh/HRyc2VPYosatrbWrlxUtgkLKiWJ3XJ958CZk/HmvpWj6yyW1VbaLcA81ssAF2HdP7MMS0R6+79K+faXpgd18Ww7KFYEsnEm4Qc98j9K3N7V6VNr2mYuRnKLsJOffkfAR2rWS9jnT3sl671ZriusqbRUgzvdpYFlIJgADae/YfKsx1K+yWV1BYLuP7Iom0oVB77jgwe2Z+FaSx1bRA3FcAp+VldSMAqJSfQn71mfaS+LyKlo2kROFm454MmGBA5JqYRd0OUlQ4TUNcO/K7rTwTkFUXdECAGaACe8DmqNu1c8GDBTxNvhS27cFFzdO7iDVLX9Q2W7enOTbdmLKnvE7cAEjiDUF721VdW2r5bI8Pbj3dvO+e00YS8B+SPks9YLAMtx2U7lRiklSArGAOeGHpwPSs51olF2pejZbQbQxBPkWMfLNWf8A5JbFi3ageR3aWT3tyrAxMEbT/u+FQ9SS3esvctp+08is5JUE+UY3ECIBq4JrsUmpf2kw6aF27kZSCeMl+ATI7yy/f7HT9ILd87YUDIueaczIIJ5mQeOK6HVybiMRMK4JiAJNs9v8gA/nSpLhe8x3sJa4fNIGd3BnjzelON+Qlj4NKNE67ASHClgcg+9MbiY57R6xS7pjKviB/eRgWIXZtj96PLyPtS1dTcGwh5D7jE8jzEY+G5ftUOj6ufMWgktJIzOAMmT8RWiRm5I0PSgBYUIW3Luxbi5E7ogqRnP61teny1y3FxDiyNrSSCPFOQRCn3e8YOa+X6fWBbS22tuqnzGPXdgye/GfSvpHs/1jTm1aLXTbtWwoZnB824sCDyJ8hiRy0fCkwT0XOuWGW+rssulliM7jhoGM8AiPn8KyWv09sXrwAj9q/JI7niCMV9J61Yslg9p0S1sBDIdrAEgwCpBAJz96+bdQZlu3A10Id7cw27JlsqYkzipKjs+ZWPsR3H/NetqW7M0f5jTTQ9HuXgfCtsxCsx4GFEk/36UpeyRW1HIdXLoYltvqef771CamSzyBn/kU96L7OeLbuu5KbEkQpaTgAGOJ9TTSsRnVBqzp0yJ4/v0p90X2fFy6Ldy4lsFSQxMjE+nxBHzqI9HubmCqW2yTHoO9J6LijT9N60Rpkm2IDC2GCjhSsjMjKkAxWq6gt27YU+CojYQQqrzt38jHvA/6h6VlvZfpSXLH7W4UXc5UQpG4BZ97gmUz8Kt6a0HZVdnVSrHN2Yk7VELHAE/GI7VhLj9jqjyHGj6dbKW7ht2QlwDD3Cw90u0gkxykY5kV3o+mW1F1G/DsUWBChpaEkqQpkElo+vpVnROq6UWnPmF1f2gKhsORt9SD5ef3j2FXrHUlGoa4Nql7aKyBjtgq2RAwd3BHaTyYrH8L9zp/qfgVaaV01sm6VYOpZRbIKiVkzx5dv/7Uzt2EN62viXn3WiMAKd02yyw3IgE471Fob9u3o71kqpDTJbcSPMSCuMeUAfOlmh0Ysam3duN4ySCFDcblLASPdKhYgDEiqfpl3ZH9XLqix00eDq7+5GcKSQsncI37N0CO4OM1cFydT+MW2WtC6twkKeMYOe3m7dzzVjVas2rty46n9pdx+WdogiROZCz6z2inZ1io/gABp9ZkF5kD1ABAFVtGbd7ZmOsal/wiq9ohN07wo3c45MAc/wBg096Pfa9pbmRAt7SCsN5WMFSTBJJImOI9KWWybyNpVUMP2se9O0F2yZ9RiuOlXXuabaqsoMI0fu7jOZkSisT6x8KrHJUxZ49FzpL3L2iulncBLYGw7QWAkL5jB5Jk4NRez6ltKVuG4p8PFsv5XVZIPEhQSSZmBNKFtai7bLJbJUqEaIggNu+0bj96b6Ppt66iXbKSBZCMwKd3YwTMxs9cYNJ8UUNc0mL/AGT0aF2F9bdq2GVCysV85YhQIPnnHPrI7131HSKusZlNo2LYPiT5o2wYY+9vM4g9uJwZtD06+bluwCNzeE5G4CCVdJ9O449KqvpL6XwjOvnBMbycSzA+nBFChuxPk0S+1Glt3LllNI2wna0AGYaMluO8hTyBSz2k1S3LeltzhdWql9pWT6wYx3xg1a1nS7lq4ga6sotqRLNlbee0ZJpd7X9FewdKGYE3NSpxONq2kzInmT9quMejOc7seXOmWUvttVrllE3Qy5ZgWO3GOZHpgTim2i02nbTnUHThb6ny2VGG9DkRVVXCagoHBGwGBxm1vPGO5+tPLHTFdbNzxwNptBlkz5WLPjnIAH1zV/JL/wAmY02sYhr13ShbySEAG1XJ90kTyD8eD8ox/V/bG66FXUeIGw8RC+YMByCJiPrX0brvSwy7kcrtZdqsMkbndsgmOyzmMV8ov9CldxvW9yxutjke6BJmIO4GpS9xTfsxb1Hql6+5e4xf04EDgAAfAR9BUdvxIEAkGQTEyZk/pA+lNtL08FfN5JcplT5WAGCxMAEx/uqzcsWDZAdiCGJMACDtjYBySrbpMmfTmm2ZpWZ5xADCZHIHyEc/DHxqxavM4FuWIXgTxEA4HwMT8Ktau8heLSyvIhTj1AnOM/p6V0+jUIXiBvGe4AzgZ5xmk2NRfgl0+ltMFMOIiRIBM7Y+MDnFVNRpmW6yb22rGcnDRH0yc/A05vacIVRXAYqxyefMeP8ARH1zWfd3dm8ywJJ+Q5GBSibSVKme3FdNrbgckcDGPjTOxor23/F2uQDsC8TwCwEAmoPDtMbKBlB2LMBm3MYH5SK2Gh0l20gUXrfmHnDKW3gGe5nGO9U5JBx8cpdGZ9lddOoU3mZkBEqSc57itH7Zg3dRdewUVC21kIABcZ2qByAQf09RMOu0d5GJGxlPe2qiPniYpZrbupaShuMZnA7nufsc1F27KxcVTGWo6tbbRpZsy11ifF343CMAM3ugZx6n5V10rodi/b337rWnkjbuBj5+hJJrN3LeuY48Y/KefpVa5a1gOfG+rN/Wnj7MnJ+UbHRS9u3aUAJbV23ghSJDTJ5IkD170kv9LCupJAlstPY471NpuuWl2/sHYgbTuKEFd5McifLtH9zVa91ixuDOl1eB5TbJwBEAH4Gtm7ZgkcajSIt9VA2ja/I+UH6GtP0MbFdSR4TFQSd3niDAK4PrmlKtYuvbdGZQqXAd5BO5gCnujiASfSpdZf0oCgajUbFMwUBAJEcEgZxTTE0VuplVuK1seUpj6sx/nTLQdWAXZbm0HIDuSDKnBWCOMikbdR0bEA3boVVCiLeTE5MnH61ab2i07X0cuwA2QyptCbGkCOTgDMzUSVouOjcdN6cn4a3dRRcD6hlgbQJYKAIAiPKB2/WBc1Wj3A20S0LaKAGM5Yn3RKzOAZ9CKytv2pFnF662WBUKpIhZEwTgkR9qhse2WmFxBc33bW7c4JKzAgDH98UvBSq9s1Oj0xvWoa2ivecm2pgMSpG4hogQwJj0DfAG8NHaS74r3LewKLe6AonacFSBgCTunj44rL9K9udNaWGYuRJBIiCSSYniZiqdr2nsrcW5u8S0Lpco35ZUAIAfeUHvA+VJv2QKvLNPc6h5LiQgd2faokyFlRDAjbMeWOTkwDNINPpbtzUMibf2bW5IDeWEOefN3GeTFL31elvXC1ozfLMbcloUyzJ3iASPtXOj66ls3yQwG5IjMwmT8JP2kVSeug0n2b3Sa9ELfipuFXhANoJNwgtgnb6HHp2zU2s6lpF1ghCzMytuDwEnbBaeWMjjgAV896b1lYtWVBbyPcJIMkwTAzkQ0zjirWm6p4rjBUAWbasVMHEHdE7YAn4HFHgl1baNdZ1qG2bensurBRvdUBSTO9QR5s5zJpH0i7csae3vJs7rjHFsAKIaCwIzzMek8mt77R9eSxpi7IHgKAuAZIiR8fnXz217Trc1PmIgG0y4I5QjOMk84gfDuWxRkvKGraBrFkG85QuZi2FCoJjdEebnPHOKY2tAdPYU3rjq1zCra2gALAYgRB+RieB61jPavqCs4IaVztiDguB94M/aYqxrusi6VtMseFunzEBsbuwiTMfMCpd7RpHHTZqbPTyouXrrs623FsbYXccQWaJC+ZeMksBXun09pgdQty54SSGQEFg3lhUYj3WDTJ4g/CsantIWe9aK+VCCDGSSCc/ZeMc80a3rysz27YNtHCQqiSrD80lcmPWk5ewRS8mwt/trzLbiyyoCYYuILwWk53CQT69qynt1fR72ktpu8upUF7jFmJlZkcCJnHxpfofaK1auu6jdvVrcTBlidvIjt2pX1/qT3Lemui0AEYPuiNxlMHAmCefgacXKkKeFuj6D7PdLe7dul2cJbBDAEiZG3aD9Tn4Vb0ess3XW0yCyrELbe27lgSsjeO4MxNZXQ+16pe8MoYYwCYA3GAe08zx61PqOp2zcF7ZsYv8AkLDErE4j8pwOaJPehxxp2jVdcYaO2Fa141wqNxuksgkCVCzmMAk1mr/TbWoFxrduLxYLcSCyQ7bht4Mdue3Paq/tN1209wO6NtVohWKzgZwvYevpUWm9qren2i2p23mWdxZiqgFlgkfFVP8AloTtkNLH5POs9Luhvwz3FP8AiBNiBixZi0mWMtJGOfTisf0vSs7NZ8OXBYt+8As7gCZiIj4zWw/9xUavx9g2zuCqIkEGB7ueO4pDZ1tsa7xBIS+U3QOAT5ox6r6cml2DS0c3Q1vw0tApJAJRp2Mfy/vR3zgZiultMWG254gnD58xyrATmRGI5+VPW1mhS4t02rikljtDGAQZH5aq67rGjs2v2NsqUG5F3d2mJG3P72ahxZ0QnCqlYsvdJ1DQAJ82GIAwwdhz8m59PlVTW+z95GHl8SRJCRg8CRiPX6j41pP/AJDbKWtssUubmMyTFq9E8AEHvHrSzrHXbF8y4KEiCUK+eMAkxMj7HNSsrpms/wAKi8ezPnoWpn/CYf6lH86luaHUQq7IPY71JP0BnMx9qkvDRkkjcMtjy9hXukv2LLgh3UhZlQD5v5EEVocqaQ10GhlSWIwJiePmO2Ku3ba30KtA8NYBE8H1n47c0suX7SWrkIS5DMWYkE+/BhTH6d8/DrSBBuUM5J5791McfIxWdOjplNaILfs/a8xN1oUGeP8Av9BjhP8AePSn+m1rEcLjH2A+NJtReW3v3XHgxwqqYOOQJ7/pVa71i2hgbnnMgrj4f361VMxuNlVepeUBvezggj68HtVDXOWdigkD3dygkjAPrmTPwmtiPZ6zG34z2/v/AIFA6HaERMjiDHYDt8q2owMtb6s1tT+xGTyQRiAAMQO1ULutdvy95wK2Gp6V2Wc+sniIiZia80XSAnMFgTmOxiKKFTMiLV7naefQV62kvNypxx/YrcJZ+P6UG0vr+lA8TGGxqCB75wBk8feul0V88z962aIvoDXDAelKxqKMmOm3/WP9Vep0W7IO8A+snH1rTmP3f4/1rgEclR+o/nStlYxE/wD7fd4FzaQQJDNJ8sE/ZWPzIr3TdHdhFy6YbacGeBwT+lPLKqEcQPMMHOCDI4Pz7VDZcKcqTHI3GPtNFhim9kGl6VbUgk3CQsYZRHGMg4pzoNBpwZ2XiZP/ANlvuTmdsg5ilz6kThR+v9RVnT69pjaogckt/ImnbHjEpe0elvM91UtN4bbEXeQ2STNyVHbj6g9ql6HpLI1Drct3CqpZIKsF8yoATnsSSRTWz1bdlwInMFj/ABNXLupLpvtm2I7AEGM8jdH8adkqNs8vaLSOB+zujbGSyk+8H7RyVA+lKgdM+ouqbNxF3BlKxmCrZJnvA54BqxbuPtgqCSCZif4E/wAKrlnEkFR2wAZ+pNJyfZa40RdNs2PGvl1uFGiIj4j+AX716LGm8UsUvHkjIHGJ+81TvdQuLnac5naAfmfMR+tUBrNxywGIyB/We/rSsMYnL6G34gK7lO9CZPAxPaOGNcdb1ao625cKOGOfKTzHPvbjV21dJaVdZxwvpHofhSD2ju77szu8oEgR3P8AWmmROKStGgs6BX17hC7bHtxngbgWMjgAbjX0e57NXSqsCIUiZY+hH8/0r5v0jqB8a6Ued6Kx4EkhRyW7GfvWsXrd8qBvVd3lIuHYAAMRMgk5z3qtEb8Cz2s0F0KfMCC0mZPwwfp60i6zZuLZt7mUsjAArPZQuf8AaKu9eV3nzIRJja6mY+n8DSa+zxBxnuVPxnB9anRWx1p9LedAWvKSVABngCRH6x/zVW70h96N4oJQqYgniD/5pb+KIEROOwj+/wCNCa0jIQj4+aigNIL+qLBrj2yQu3A5nn+Aqj1CxfuWmQshngfCeZpO/UCeYn5HFeHWHJ9fn/AUUFmgvi94aKBbG24HJ5JhSsEkcZP3NK9QnhI37NNoBzu3ETEQSPgf91Uvx7Z+/oPtVbXaosjD5evrSoGzzomo963tVt0ROIjmD8qq6/UszebAHCjsK50RK3FP98VzrbhZ2JnnvTIvQ50Dm5YuA2zceNobkjmP4itP+JbfPh3PDVTsVSRlo3k95wQD8axnRtSV3AfOndnqh/5n+lFIpM46/fvOtp3VpG0FDJggECD8QJ+tZ/WXZdioIBgxzyAftmtNq9YWABZRBDdzEH5/SlrdLDEkNbgk4jj9adCdmqPUh6r/ALpqNuoj1H3H6UUUWFkbdTnG4feuDrx+8PqRRRQFnI6gD+ccd2FcHX/9w+9FFIdnKa0HuJ9BH3mRXP44eo9MsP50UUBZE2v5Mj71wuu47iOZP/FFFIMib8aGAkj6xj51wb68blj/AE/80UUDyOjqwOSPgS0fyryxcQmNy/Mt/T+dFFMMiW1qRkFkA+JTP3/rXlrVKZAZbcZBHr9wPsaKKAUju31VvzsGGM7TH3mf41bt62zGbiSeBLLyT2OR9a9opUUptEDhY3K4J/zRH6/yqlqlQxv2H4k+vxNFFFFuREdPaghWA+TBv7+hpbrrXmAJntMmiigzbtFi3fuWyTAb/u7/ANPuKZWvaZwNjMpWBBEAj6rJ+9e0VRFlfUdUTJENOSdwP6mDVQ69Wxu+hz9iwxRRSoM2S2tTGZB+LQfpAEfwqE31kyoM95Aj70UUDsiuug/8EfxEmopWeQfrRRQK9g1keoH1qK8IU8cH0NFFANlLTHzL8xXpUsxj40UUyCxa0pSXaIHoQZ+xmrakEAnHykT9poooY0ya3cAiWj5n+oFdrqI/N9iK9oosdn//2Q=="
            alt="ggg"
          />
        </div>
        <div className=" -mt-14 flex space-x-96 ">
          <p onClick={
            ()=>{
showhome(true)
showabout(false)
shownext(false)
showinfo(false)
            }
           } className=" border rounded-lg h-8 w-max border-b-2 border-black ml-48 mt-1 cursor-pointer">
            Home
          </p>
          <p onClick={()=>{
            showhome(false)
            shownext(true)
            showabout(false)
            showinfo(false)
            
          }} className=" border rounded-lg h-8 w-max border-b-2 border-black cursor-pointer">
            Nextpage
          </p>
          <p className=" border rounded-lg h-8 w-max border-b-2 border-black cursor-pointer">
           <button onClick={
            ()=>{
showhome(false)
showabout(true)
shownext(false)
showinfo(false)
            }
           }>  About</button>
          </p>
          <p onClick={
            ()=>{
showhome(false)
showabout(false)
shownext(false)
showinfo(true)
            }
           } className=" border rounded-lg h-8 w-max border-b-2 border-black cursor-pointer">
            Search
          </p>
        </div>
      </div>
      {
        home &&  <div className=" flex flex-row justify-evenly flex-wrap   mt-4 ml-6  ">
        {count == false ? (
          data1.recipes.map((data) => {
            return (
              <div className=" border border-black p-6 m-6  rounded-2xl shadow-2xl h-auto w-80 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-blue-300 ">
                <p className="  text-blue-500  ">
                  {" "}
                  <p className=" text-black font-semibold"> Dish- </p>
                  {data.name}
                </p>
                <p className=" text-blue-500">
                  <p className=" text-black font-semibold">Ingredients-</p>
                  {data.ingredients}
                </p>
                <div className=" border border-black rounded-lg  w-max ml-3 mt-4">
                  <img
                    className=" h-28 w-28  rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  "
                    src={data.image}
                    alt="gg"
                  />
                </div>
                <p>id-{data.id}</p>
                <p>Rating-{data.rating}</p>
                <p>Reviewcount-{data.reviewCount}</p>
                <p>mealType-{data.mealType}</p>
              </div>
            );
          })
        ) : (
          <p> data is comming</p>
        )}
      
      </div> 
      }

      {
        about && <About/>
      }
      {
        next &&<Next/>
      }
      {
        info&&<Allinfo/>
      }
     
      
    </>
  );
};

export default NewAPI2
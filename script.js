const image =  document.getElementById("lightOff");

            function changeImage()
            {
                if (image.getAttribute('src') == "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png")
                {
                    image.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
                }
                else
                {
                    image.src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png";
                }
            }
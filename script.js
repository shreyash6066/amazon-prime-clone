var favChannels =[
    {img_url:"/img/channels/Discovery.jpg"},
    {img_url:"/img/channels/Docubay.jpg"},
    {img_url:"/img/channels/Erosnow.jpg"},
    {img_url:"/img/channels/Hayu.jpg"},
    {img_url:"/img/channels/hoichoi.jpg"},
    {img_url:"/img/channels/LionsgatePlay.jpg"},
    {img_url:"/img/channels/MANORAMAMAX.jpg"},
    {img_url:"/img/channels/Mubi.jpg"},
    {img_url:"/img/channels/ShortsTV.jpg"}
];

favChannels.map(function(elem){
    var div = document.createElement("div");
    div.setAttribute("class","channelDiv");

    var image = document.createElement("img");
    image.setAttribute("src",elem.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);
});

localStorage.setItem("favChannels",JSON.stringify(favChannels));
const testme = () => {  
    const element = document.createElement("div");
    const content2 = document.createElement("div");
    content2.classList.add('container')
    const bar = document.createElement("div");
    bar.classList.add('bar');
    element.appendChild(content2);
    content2.appendChild(bar);
    const homecontent = document.createElement("div");
    homecontent.classList.add("home-content");
    homecontent.setAttribute('id', 'homecont');
    content2.appendChild(homecontent);
    const title = document.createElement("h1");
    title.textContent = "Veggie Resturant"
    homecontent.appendChild(title);
    const aboutus = document.createElement("div");
    aboutus.classList.add("aboutus");
    aboutus.textContent = "Hello, this is my resturant...wadwas dwasdawdwasad dwadw. idowandwoia iwaodwna iwaodnwa diwaondwa siadonwa disaodnwa dsiaondwa diwaod w. saidnwoa sadwnas,a dwjandwa sianow, eanifowa beiwof, waiondwa ,ve.w ifdwoan.a fewaione. wdoapdwja wiaons dwioadw. dwioand saiodwm v ea. idwnoadnw siaoc siaowa. dwnaiod cwoap ciaoc nisoapfw fieoan eioan. oapfjw ofwap nvdanio wianof. Sincerly, Resturant Owner.";
    homecontent.appendChild(aboutus);
    const hours = document.createElement("h1");
    hours.textContent = "Hours"
    homecontent.appendChild(hours);
    const hoursec = document.createElement("div");
    hoursec.classList.add("hoursection");
    homecontent.appendChild(hoursec);
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    for(let i = 0; i < 7; i++){
        const houradd = document.createElement("h3");
        houradd.textContent = week[i] + ": 9-5";
        hoursec.appendChild(houradd);
    }
    

    return element
}   

export default testme
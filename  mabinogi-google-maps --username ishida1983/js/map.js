var IN = new Array();
IN['lat'] = 0.000000;
IN['lng'] = 0.000000;
IN['zoom'] = 3;
var LatLng = new GLatLng(IN['lat'], IN['lng']);
var map = null; var mgr = null;
var data = [
 { name: "艾莉克娜<br />Alexina", content: "所在位置：	克拉營地 - 克拉營地<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(0);' style='padding-left:150px;'>more</a>", lat: "-80.16371016565112", lng: "-114.3017578125", cdescription: "" },
 { name: "伊菲<br />Effie", content: "所在位置：	克拉營地 - 克拉營地<br />負責業務：修理服裝、修理道具、衣物改造<br />喜歡的禮物：一套貼身衣物、世界名詩選<br />通稱綽號：<br /><a href='javascript:showContent(1);' style='padding-left:150px;'>more</a>", lat: "-80.28310417537246", lng: "-114.5654296875", cdescription: "" },
 { name: "伊絲娜<br />Ethna", content: "所在位置：	克拉營地 - 克拉營地<br />負責業務：銀行服務<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(2);' style='padding-left:150px;'>more</a>", lat: "-80.35699541661764", lng: "-114.609375", cdescription: "" },
 { name: "希布林<br />Heulfryn", content: "所在位置：	克拉營地 - 克拉營地<br />負責業務：治療服務、修理魔杖服務<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(3);' style='padding-left:150px;'>more</a>", lat: "-80.45950894000698", lng: "-114.609375", cdescription: "" },
 { name: "尼克<br />Nicca", content: "所在位置：	克拉營地 - 克拉營地<br />負責業務：武器修理、武器改造<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(4);' style='padding-left:150px;'>more</a>", lat: "-80.56814687777681", lng: "-114.6533203125", cdescription: "" },
 { name: "雅拉塔<br />Atrata", content: "所在位置：	比路里亞 - 比路里亞醫療所<br />負責業務：醫療所急救員<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(5);' style='padding-left:150px;'>more</a>", lat: "-37.99616267972812", lng: "114.4775390625", cdescription: "從小出生的雅拉塔沒看過天下掉下的雪，但經由哈吉爾 的記憶裡看到了天下飄下的白色細雪，讓雅拉塔感受到無比的感動。雅拉塔非常敬佩卡絲妮亞擁有冷靜又正確的判斷力，而且也很感謝卡絲妮亞的幫忙，要是沒有卡絲妮亞她可能就到不了比路里亞這美麗的沙漠綠洲呢。 雅拉塔是村莊裡唯一會藥水製作的精靈，如果村莊有需要時，都會請雅拉塔幫忙製作，如果有人一心急的話，她會告誡你要好好保持平靜唷。弓箭對雅拉塔而言不算是武器了，而算是習以為常的物品了，可能對精靈村的居民而言從小到大看慣的東西就跟警察執勤拿著手槍的道理一樣吧。雅拉塔位於比路里亞的醫療所，如果有受傷的人們請多到這來找找她吧，她會細心的處理好你身上受傷的任何部位唷。" },
 { name: "卡絲妮亞<br />Castanea", content: "所在位置：	比路里亞 - 比路里亞村長<br />負責業務：精靈村長<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(6);' style='padding-left:150px;'>more</a>", lat: "-36.38591277287651", lng: "114.5654296875", cdescription: "是精靈村的一位年輕村長，但卡絲妮亞小的時候為了能夠成為帶領種族的領導者而接受訓練，必須經過源源不絕的孤獨和痛苦，但卡絲妮亞通通忍下來了，因為她知道這條路不能在途中放棄，在和他交談的話中，他也會鼓勵旅行者們不要中途放棄所學的一切，要堅持到底的精神。到現在卡絲妮亞還是不諒解哈吉爾的作法，讓人類的銀行進駐到精靈的世界使卡絲妮亞還是抱著憂心的想法。卡絲妮亞處處為精靈門著想，對自己總是抱著沒信心的態度，導致常常有挫折感，可能是認為自己的能力不及處理的事務吧。如果來到精靈村莊比路里亞，記得來這跟卡絲妮亞多多交談，他會說一些精靈村以前發生的故事唷～" },
 { name: "葛尼提斯<br />Granites", content: "所在位置：	比路里亞 - 比路里亞雜貨店<br />負責業務：雜貨店老闆<br />喜歡的禮物：魔術方塊、襪子<br />通稱綽號：<br /><a href='javascript:showContent(7);' style='padding-left:150px;'>more</a>", lat: "-39.43619299931407", lng: "108.5888671875", cdescription: "對時間的觀念非常嚴謹，對萬事都抱著不可能、公不公平的態度的態度，而且講話的時候也非常的直接~會讓人誤會他的意思。慵懶的個性是他可愛的地方，不過他不知道的事情，常常都會說想睡了...最讓人可怕的是，他曾經什麼都不想做的去羅佩斯沙漠過幾天幾夜，土野狼在他周圍看著他留著口水，他說著：你們這些傢伙，想要我死就來吧！那時的葛尼提斯實在是厭煩的快要死掉了。如果聊天跟他聊時間一久了，他可能就會叫你去跟鏡子說話囉～" },
 { name: "哈吉爾<br />Hagel", content: "所在位置：	比路里亞 - 比路里亞銀行<br />負責業務：銀行行員<br />喜歡的禮物：起司塊<br />通稱綽號：<br /><a href='javascript:showContent(8);' style='padding-left:150px;'>more</a>", lat: "-37.02009820136811", lng: "108.45703125", cdescription: "哈吉爾為人正直，做什麼事情都慢條斯里的，是個會說請、謝謝、對不起的正人君子，而對於曉得的知識會一一慢慢的解說給你聽，而不會厭煩，不過要是遇到 不曉得的知識會勇於跟你說不懂。可是呢~問太多他不懂的事情，他可能會轉移話題說著他身體的不適而回答不出來唷。哈吉爾曾想要要畫更大的圖，而超越比路里亞，視野伸展到全部的精靈以及伊利亞大陸，這件事情 可能不受到卡絲妮亞的諒解吧...，不過最重要的還是剛開始要在村莊建設銀行，由於人類的因素，讓身為精靈村村長的卡絲妮亞堅決反對。當哈吉爾10歲的時候發生過重大的事故，所以以前的記憶無法想起，就像是從中間才開始閱讀小說一樣，不過對他並不會造成不方便，但是偶爾還是會有不安的感覺。" },
 { name: "里普斯<br />Lepus", content: "所在位置：	比路里亞 - 比路里亞服飾店<br />負責業務：服飾店老闆<br />喜歡的禮物：麵包<br />通稱綽號：<br /><a href='javascript:showContent(9);' style='padding-left:150px;'>more</a>", lat: "-36.27970720524016", lng: "106.6552734375", cdescription: "普里斯身性害羞，所以他就會覺得和他在一起的人， 會感到不自在...有機會他會想過要搬家。普里斯對於做事情都不是很集中精神，但現在是因為喜歡，所以在製作衣服，但是他不知道自己的未來會變成什麼樣子，他也想過像梅莉絲製做武器，也想過雅拉塔製作藥水，但是最終事實上要做的事情，不敢保證會是這樣子的...不過曾經普里斯小時候一度的不舒服過，而經常呆在家裡，所以心理感到很悶，就把縫紉當作休閒生活，就是這樣子讓普里斯愛上製作衣服吧～常常有人說梅莉絲比普里斯成熟，不僅在說話方面連言行舉止也是如此，別看普里斯臉蛋可愛的樣子，其實他和梅莉絲同年齡喔。普里斯位於比路里亞的服飾店，想見識他製作衣服的手藝，就來這看看吧！各式各樣連牛排妹賣的袍子也有唷！(雖說只有一件...)" },
 { name: "梅麗絲<br />Meles", content: "所在位置：	比路里亞 - 比路里亞武器店<br />負責業務：武器店員<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(10);' style='padding-left:150px;'>more</a>", lat: "-37.64903402157864", lng: "107.4462890625", cdescription: "個性中規中矩的梅莉絲擁有非常柔軟的性格，為過路的人門解釋事情時候，有都是細心而不耐煩的說完每條字句，梅莉絲曾經覺得種族之間所具有的差異，只是表象所顯現出來的，因於文化或生活的環境所產生的差異，卻是沒有辦法避免，不過呢也是必須要有的。對梅莉絲而言世上的萬物都具有意義，一一的尋找就是日後生活的定義。梅莉絲對萬物充滿好奇，甚至也想知道，人類是如何製作武器的，梅莉絲製作武器都是起於夢裡的靈感，為了記住內容梅莉絲都會在床頭放個小本子，取名叫\"夢的日記\"，就這樣天天的寫沒間斷過，至今梅莉絲應該寫的很厚很厚了吧～梅莉絲也常常覺得就算再怎隨心的到處走動，她就是不覺得那是自由，就像是被砍掉的提卡樹一樣，馬上就會枯委、凋謝，而萬物都會變成虛無的空間。如果來到了比路里亞想買武器的話，就來找梅莉絲吧，他也會跟你說些心靈的想法唷～" },
 { name: "姬琳<br />Kirine", content: "所在位置：	巴雷斯 - 巴雷斯<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(11);' style='padding-left:150px;'>more</a>", lat: "49.1242192485914", lng: "-78.92578125", cdescription: "" },
 { name: "庫魯格<br />Krug", content: "所在位置：	巴雷斯 - 巴雷斯<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(12);' style='padding-left:150px;'>more</a>", lat: "48.66194284607008", lng: "-79.1455078125", cdescription: "" },
 { name: "陶恩斯<br />Taunes", content: "所在位置：	巴雷斯 - 巴雷斯<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(13);' style='padding-left:150px;'>more</a>", lat: "51.17934297928927", lng: "-74.1357421875", cdescription: "" },
 { name: "瓦安特<br />Wanst", content: "所在位置：	巴雷斯 - 巴雷斯<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(14);' style='padding-left:150px;'>more</a>", lat: "54.7246201949245", lng: "-75.146484375", cdescription: "" },
 { name: "維伊德<br />Weide", content: "所在位置：	巴雷斯 - 巴雷斯<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(15);' style='padding-left:150px;'>more</a>", lat: "52.96187505907603", lng: "-79.365234375", cdescription: "" },
 { name: "雷德歐<br />Zeder", content: "所在位置：	巴雷斯 - 巴雷斯<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(16);' style='padding-left:150px;'>more</a>", lat: "54.41892996865827", lng: "-77.6953125", cdescription: "" },
 { name: "庫塞<br />Kawsay", content: "所在位置：	科爾 - 村長家<br />負責業務：村長、藥水商<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(17);' style='padding-left:150px;'>more</a>", lat: "-13.025965926333527", lng: "7.6025390625", cdescription: "" },
 { name: "庫西娜<br />Kusina", content: "所在位置：	科爾 - 服飾店<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(18);' style='padding-left:150px;'>more</a>", lat: "-13.410994034321702", lng: "10.7666015625", cdescription: "" },
 { name: "洛瓦伊<br />Ruway", content: "所在位置：	科爾 - 食品店<br />負責業務：<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(19);' style='padding-left:150px;'>more</a>", lat: "-16.088042220148807", lng: "11.42578125", cdescription: "" },
 { name: "圖派依<br />Tupay", content: "所在位置：	科爾 - 食品店旁<br />負責業務：訓練師<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(20);' style='padding-left:150px;'>more</a>", lat: "-15.538375926292048", lng: "11.5576171875", cdescription: "" },
 { name: "博伊特<br />Voight", content: "所在位置：	科爾 - 遺物鑑定師<br />負責業務：鑑定師、銀行服務<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(21);' style='padding-left:150px;'>more</a>", lat: "-16.467694748288956", lng: "6.7236328125", cdescription: "" },
 { name: "沃沃卡<br />Wovoka", content: "所在位置：	科爾 - 武器店<br />負責業務：武器商<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(22);' style='padding-left:150px;'>more</a>", lat: "-14.008696370634658", lng: "4.74609375", cdescription: "" },
 { name: "阿爾南<br />Arneng", content: "所在位置：	凱麗達營地 - 凱麗達營地<br />負責業務：銀行服務<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(23);' style='padding-left:150px;'>more</a>", lat: "73.87371654457475", lng: "-15.2490234375", cdescription: "" },
 { name: "貝莉塔<br />Belita", content: "所在位置：	凱麗達營地 - 凱麗達營地<br />負責業務：賣藥水<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(24);' style='padding-left:150px;'>more</a>", lat: "73.6896106541099", lng: "-15.205078125", cdescription: "" },
 { name: "凱彼<br />Kelpie", content: "所在位置：	凱麗達營地 - 凱麗達營地<br />負責業務：賣雜貨<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(25);' style='padding-left:150px;'>more</a>", lat: "21.94304553343818", lng: "-83.671875", cdescription: "" },
 { name: "雷加圖斯<br />Legatus", content: "所在位置：	凱麗達營地 - 凱麗達湖<br />負責業務：僅能對話<br />喜歡的禮物：<br />通稱綽號：<br /><a href='javascript:showContent(26);' style='padding-left:150px;'>more</a>", lat: "73.50346063726599", lng: "-15.2490234375", cdescription: "" }
];

function initialize() {
	if (GBrowserIsCompatible()) {
		var Layer1 = new GTileLayer(new GCopyrightCollection(""), 0, 5);
		Layer1.getCopyright = function(a, b) {
			return { prefix: "<div style='float:left;'><strong>Iria Map for Mabinogi</strong> by <a href='http://logue.be/' title='' rel='external nofollow' target='_blank'>Logue</a> / ", copyrightTexts: [" &copy; 2009</div>"] };
		}
		Layer1.getOpacity = function() { return 1.0; }
		Layer1.isPng = function() { return true; }

		Layer1.getTileUrl = function(tile, z) {
			var x = tile.x;
			var y = tile.y;
			return "./images/" + z + "_" + x + "_" + y + ".png";
		};
		var Map1 = new GMapType(
						[Layer1],
						createCustomProjection(),
						"Iria",
						{ errorMessage: "error occurs in loading process." }
					);

		map = new GMap2(document.getElementById("mapbar"), { mapTypes: [Map1] });
		map.addControl(new GSmallMapControl());
		//map.addControl(new PanoMapTypeControl()); // panoramio photo layer					
		map.setCenter(LatLng, IN['zoom']);
		map.enableDoubleClickZoom();
		map.enableScrollWheelZoom();

		//add picasa album
		//var geoXml = new GGeoXml("http://picasaweb.google.com/data/feed/base/all?alt=rss&kind=photo&access=public&filter=1&q=mabinogi&hl=en_US");
		//map.addOverlay(geoXml);

		window.setTimeout(setupMarkers, 0);
	}
}

function clickspot() {
	//
}

function createCustomProjection() {
	zoom = IN['zoom'];
	var projection = G_NORMAL_MAP.getProjection();
	projection.tileCheckRange = function(tile, zoom, tilesize) {
		var tileBounds = Math.pow(2, zoom);
		if (tile.y < 0 || tile.y >= tileBounds) {
			return false;
		}
		if (tile.x < 0 || tile.x >= tileBounds) {
			return false;
		}
		return true;
	}
	return projection;
}

function setupMarkers() {
	var mgrOptions = { maxZoom: 5, trackMarkers: true };
	mgr = new MarkerManager(map, mgrOptions);

	/*var guyIcon = new GIcon(G_DEFAULT_ICON);
	guyIcon.image = "http://maps.google.com/intl/en_us/mapfiles/cb/man_arrow-0.png";
	guyIcon.transparent = "http://maps.google.com/intl/en_us/mapfiles/cb/man-pick.png";
	guyIcon.imageMap = [
	26, 13, 30, 14, 32, 28, 27, 28, 28, 36, 18, 35, 18, 27, 16, 26,
	16, 20, 16, 14, 19, 13, 22, 8
	];
	guyIcon.iconSize = new GSize(49, 52);
	guyIcon.iconAnchor = new GPoint(25, 35);  // near base of guy's feet
	guyIcon.infoWindowAnchor = new GPoint(25, 5);
	var marker = new GMarker(LatLng, { icon: guyIcon, draggable: true, title: 'Your Position' });
	GEvent.addListener(marker, "dragstart", function() {
	marker.closeInfoWindow();
	});
	GEvent.addListener(marker, "dragend", function() {
	map.panTo(marker.getLatLng());
	marker.openInfoWindowHtml(marker.getLatLng().lat() + ", " + marker.getLatLng().lng());
	});

	mgr.addMarker(marker, 0, 5);*/
	mgr.refresh();
}


function showAddress(num) {
	/*var geocode = new GClientGeocoder();
	if (geocode) {
	geocode.getLatLng(address, function(point) {
	if (!point) {
	alert(address + " not found");
	} else {
	map.panTo(point);
	map.openInfoWindowHtml(point, "<b>You 're here!</b>");
	} 
	});
	}*/
	var tempPoint = new GLatLng(parseFloat(data[num].lat), parseFloat(data[num].lng));
	map.panTo(tempPoint);
	map.openInfoWindowHtml(tempPoint, "<b>" + data[num].name + "</b><p>" + data[num].content + "</p>");

	var guyIcon = new GIcon(G_DEFAULT_ICON);
	guyIcon.image = "http://maps.google.com/intl/en_us/mapfiles/cb/man_arrow-0.png";
	guyIcon.transparent = "http://maps.google.com/intl/en_us/mapfiles/cb/man-pick.png";
	guyIcon.imageMap = [
	26, 13, 30, 14, 32, 28, 27, 28, 28, 36, 18, 35, 18, 27, 16, 26,
	16, 20, 16, 14, 19, 13, 22, 8
	];
	guyIcon.iconSize = new GSize(49, 52);
	guyIcon.iconAnchor = new GPoint(25, 35);  // near base of guy's feet
	guyIcon.infoWindowAnchor = new GPoint(25, 5);
	var marker = new GMarker(tempPoint, { icon: guyIcon, draggable: true, title: 'Your Position' });
	GEvent.addListener(marker, "click", function() {
		marker.openInfoWindowHtml("<b>" + data[num].name + "</b><p>" + data[num].content + "</p>");
	});

	mgr.clearMarkers();
	mgr.addMarker(marker, 0, 5);
	mgr.refresh();
}

function showContent(num) {
	var portrait = data[num].name;
	portrait = portrait.split("<br />");
	portrait = portrait[1];
	document.getElementById("inner_Content").innerHTML = "<img src='images/npc/img_npc_" + portrait + ".gif' alt='NPC potrait' style='border:0; padding:10px; ' />" + data[num].cdescription;
	//if (num == 4) { document.getElementById("inner_Content").innerHTML = "<iframe src='./artgallery/index.wrl' width='630' height='270' border='0' style='border:0; width:630px; height:270px;'></iframe>" }
	//if (num == 3) { document.getElementById("inner_Content").innerHTML = "<iframe src='./villa/index.wrl' width='630' height='270' border='0' style='border:0; width:630px; height:270px;'></iframe>" }
	//if (num == 7) { document.getElementById("inner_Content").innerHTML = "<iframe src='./scene' width='630' height='270' border='0' style='border:0; width:630px; height:270px;'></iframe>" }
	document.getElementById("detail_Content").style.display = "block";
}

function unshowContent() {
	document.getElementById('inner_Content').innerHTML = "";
	document.getElementById('detail_Content').style.display = "none";
}

function slide(value) {
	switch (value) {
		case "∧": document.getElementById("infoDiv").style.display = "none"; document.getElementById("clozBtn2").value = "∨"; break;
		case "∨": document.getElementById("infoDiv").style.display = "block"; document.getElementById("clozBtn2").value = "∧"; ; break;
	}
}
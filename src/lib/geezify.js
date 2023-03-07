export const geezify = (v, e) => {
	var char = e.data;
	console.log(char);
	char = char.replace(/[äâ]/g, "e");
	char = char.replace(/[êëē]/g, "é");

	char = char.replace(/[əǝ]/g, ""); // 601 schwa 417 inversé retrait charactère

	char = char.replace(/w/g, "ው");
	char = char.replace(/ውe/g, "ወ");
	char = char.replace(/ውu/g, "ዉ");
	char = char.replace(/ውi/g, "ዊ");
	char = char.replace(/ውa/g, "ዋ");
	char = char.replace(/ውe/g, "ዌ");
	char = char.replace(/ውé/g, "ዌ");
	char = char.replace(/ውo/g, "ዎ");

	char = char.replace(/h/g, "ህ");
	char = char.replace(/ህe/g, "ሀ");
	char = char.replace(/ህu/g, "ሁ");
	char = char.replace(/ህi/g, "ሂ");
	char = char.replace(/ህa/g, "ሃ");
	char = char.replace(/ሀe/g, "ሄ");
	char = char.replace(/ህé/g, "ሄ");
	char = char.replace(/ህo/g, "ሆ");
	char = char.replace(/ሃa/g, "ዏ");

	char = char.replace(/[ḫẖ]/g, "ኅ"); // second charac h tiret
	char = char.replace(/ኅe/g, "ኀ");
	char = char.replace(/ኅu/g, "ኁ");
	char = char.replace(/ኅi/g, "ኂ");
	char = char.replace(/ኅa/g, "ኃ");
	char = char.replace(/ኀe/g, "ኄ");
	char = char.replace(/ኅé/g, "ኄ");
	char = char.replace(/ኅo/g, "ኆ");
	char = char.replace(/ኃa/g, "ኋ");

	char = char.replace(/[lL]/g, "ል");
	char = char.replace(/ልe/g, "ለ");
	char = char.replace(/ልu/g, "ሉ");
	char = char.replace(/ልi/g, "ሊ");
	char = char.replace(/ልa/g, "ላ");
	char = char.replace(/ለe/g, "ሌ");
	char = char.replace(/ልé/g, "ሌ");
	char = char.replace(/ልo/g, "ሎ");
	char = char.replace(/ላa/g, "ሏ");

	char = char.replace(/ህህ/g, "ሕ");
	char = char.replace(/[ḥH]/g, "ሕ");
	char = char.replace(/ሕe/g, "ሐ");
	char = char.replace(/ሕu/g, "ሑ");
	char = char.replace(/ሕi/g, "ሒ");
	char = char.replace(/ሕa/g, "ሓ");
	char = char.replace(/ሐe/g, "ሔ");
	char = char.replace(/ሕé/g, "ሔ");
	char = char.replace(/ሕo/g, "ሖ");
	char = char.replace(/ሓa/g, "ሗ");

	char = char.replace(/[mM]/g, "ም");
	char = char.replace(/ምe/g, "መ");
	char = char.replace(/ምu/g, "ሙ");
	char = char.replace(/ምi/g, "ሚ");
	char = char.replace(/ምa/g, "ማ");
	char = char.replace(/መe/g, "ሜ");
	char = char.replace(/ምé/g, "ሜ");
	char = char.replace(/ምo/g, "ሞ");
	char = char.replace(/ማa/g, "ሟ");
	char = char.replace(/ምY/g, "ፙ");
	char = char.replace(/ፙa/g, "ፙ");

	char = char.replace(/[rR]/g, "ር");
	char = char.replace(/ርe/g, "ረ");
	char = char.replace(/ርu/g, "ሩ");
	char = char.replace(/ርi/g, "ሪ");
	char = char.replace(/ርa/g, "ራ");
	char = char.replace(/ረe/g, "ሬ");
	char = char.replace(/ርé/g, "ሬ");
	char = char.replace(/ርo/g, "ሮ");
	char = char.replace(/ራa/g, "ሯ");
	char = char.replace(/ርY/g, "ፘ");
	char = char.replace(/ፘa/g, "ፘ");

	char = char.replace(/s/g, "ስ");
	char = char.replace(/ስe/g, "ሰ");
	char = char.replace(/ስu/g, "ሱ");
	char = char.replace(/ስi/g, "ሲ");
	char = char.replace(/ስa/g, "ሳ");
	char = char.replace(/ሰe/g, "ሴ");
	char = char.replace(/ስé/g, "ሴ");
	char = char.replace(/ስo/g, "ሶ");
	char = char.replace(/ሳa/g, "ሷ");

	char = char.replace(/z/g, "ዝ");
	char = char.replace(/ዝe/g, "ዘ");
	char = char.replace(/ዝu/g, "ዙ");
	char = char.replace(/ዝi/g, "ዚ");
	char = char.replace(/ዝa/g, "ዛ");
	char = char.replace(/ዘe/g, "ዜ");
	char = char.replace(/ዝé/g, "ዜ");
	char = char.replace(/ዝo/g, "ዞ");
	char = char.replace(/ዛa/g, "ዟ");

	// modif ss remplacé par sz
	char = char.replace(/ś/g, "ሥ");
	char = char.replace(/ስዝ/g, "ሥ");
	char = char.replace(/ሥe/g, "ሠ");
	char = char.replace(/ሥu/g, "ሡ");
	char = char.replace(/ሥi/g, "ሢ");
	char = char.replace(/ሥa/g, "ሣ");
	char = char.replace(/ሠe/g, "ሤ");
	char = char.replace(/ሥé/g, "ሤ");
	char = char.replace(/ሥo/g, "ሦ");
	char = char.replace(/ሣa/g, "ሧ");

	char = char.replace(/š/g, "ሽ");
	char = char.replace(/ስስ/g, "ሽ");
	char = char.replace(/ስህ/g, "ሽ");
	char = char.replace(/ሽe/g, "ሸ");
	char = char.replace(/ሽu/g, "ሹ");
	char = char.replace(/ሽi/g, "ሺ");
	char = char.replace(/ሽa/g, "ሻ");
	char = char.replace(/ሸe/g, "ሼ");
	char = char.replace(/ሽé/g, "ሼ");
	char = char.replace(/ሽo/g, "ሾ");
	char = char.replace(/ሻa/g, "ሿ");

	char = char.replace(/q/g, "ቅ");
	char = char.replace(/ቅe/g, "ቀ");
	char = char.replace(/ቅu/g, "ቁ");
	char = char.replace(/ቅi/g, "ቂ");
	char = char.replace(/ቅa/g, "ቃ");
	char = char.replace(/ቀe/g, "ቄ");
	char = char.replace(/ቅé/g, "ቄ");
	char = char.replace(/ቅo/g, "ቆ");
	char = char.replace(/ቃa/g, "ቋ");

	char = char.replace(/ቅው/g, "ቍ");
	char = char.replace(/ቍe/g, "ቈ");
	char = char.replace(/ቍi/g, "ቊ");
	char = char.replace(/ቍa/g, "ቋ");
	char = char.replace(/ቈe/g, "ቌ");
	char = char.replace(/ቍé/g, "ቌ");

	//qh
	char = char.replace(/ቅህ/g, "ቕ");
	char = char.replace(/ቕe/g, "ቐ");
	char = char.replace(/ቕu/g, "ቑ");
	char = char.replace(/ቕi/g, "ቒ");
	char = char.replace(/ቕa/g, "ቓ");
	char = char.replace(/ቐe/g, "ቔ");
	char = char.replace(/ቕé/g, "ቔ");
	char = char.replace(/ቕo/g, "ቖ");

	char = char.replace(/ቕው/g, "ቝ");
	char = char.replace(/ቍe/g, "ቘ");
	char = char.replace(/ቍi/g, "ቚ");
	char = char.replace(/ቍa/g, "ቛ");
	char = char.replace(/ቘe/g, "ቜ");
	char = char.replace(/ቍé/g, "ቜ");
	// xw
	char = char.replace(/ኅው/g, "ኍ");
	char = char.replace(/ኍe/g, "ቘ");
	char = char.replace(/ኍi/g, "ቚ");
	char = char.replace(/ኍa/g, "ቛ");
	char = char.replace(/ቘe/g, "ቜ");
	char = char.replace(/ኍé/g, "ቜ");

	char = char.replace(/[bB]/g, "ብ");
	char = char.replace(/ብe/g, "በ");
	char = char.replace(/ብu/g, "ቡ");
	char = char.replace(/ብi/g, "ቢ");
	char = char.replace(/ብa/g, "ባ");
	char = char.replace(/በe/g, "ቤ");
	char = char.replace(/ብé/g, "ቤ");
	char = char.replace(/ብo/g, "ቦ");
	char = char.replace(/ባa/g, "ቧ");

	char = char.replace(/[vV]/g, "ቭ");
	char = char.replace(/ቭe/g, "ቨ");
	char = char.replace(/ቭu/g, "ቩ");
	char = char.replace(/ቭi/g, "ቪ");
	char = char.replace(/ቭa/g, "ቫ");
	char = char.replace(/ቨe/g, "ቬ");
	char = char.replace(/ቭé/g, "ቬ");
	char = char.replace(/ቭo/g, "ቮ");
	char = char.replace(/ቫa/g, "ቯ");

	char = char.replace(/t/g, "ት");
	char = char.replace(/ትe/g, "ተ");
	char = char.replace(/ትu/g, "ቱ");
	char = char.replace(/ትi/g, "ቲ");
	char = char.replace(/ትa/g, "ታ");
	char = char.replace(/ተe/g, "ቴ");
	char = char.replace(/ትé/g, "ቴ");
	char = char.replace(/ትo/g, "ቶ");
	char = char.replace(/ታa/g, "ቷ");

	char = char.replace(/[cč]/g, "ች");
	char = char.replace(/ችe/g, "ቸ");
	char = char.replace(/ችu/g, "ቹ");
	char = char.replace(/ችi/g, "ቺ");
	char = char.replace(/ችa/g, "ቻ");
	char = char.replace(/ቸe/g, "ቼ");
	char = char.replace(/ችé/g, "ቼ");
	char = char.replace(/ችo/g, "ቾ");
	char = char.replace(/ቻa/g, "ቿ");

	char = char.replace(/n/g, "ን");
	char = char.replace(/ንe/g, "ነ");
	char = char.replace(/ንu/g, "ኑ");
	char = char.replace(/ንi/g, "ኒ");
	char = char.replace(/ንa/g, "ና");
	char = char.replace(/ነe/g, "ኔ");
	char = char.replace(/ንé/g, "ኔ");
	char = char.replace(/ንo/g, "ኖ");
	char = char.replace(/ናa/g, "ኗ");

	char = char.replace(/N/g, "ኝ");
	char = char.replace(/ñ/g, "ኝ");
	char = char.replace(/ንy/g, "ኝ");
	char = char.replace(/ኝe/g, "ኘ");
	char = char.replace(/ኝu/g, "ኙ");
	char = char.replace(/ኝi/g, "ኚ");
	char = char.replace(/ኝa/g, "ኛ");
	char = char.replace(/ኝe/g, "ኜ");
	char = char.replace(/ኝé/g, "ኜ");
	char = char.replace(/ኝo/g, "ኞ");
	char = char.replace(/ኛa/g, "ኟ");

	char = char.replace(/k/g, "ክ");
	char = char.replace(/ክe/g, "ከ");
	char = char.replace(/ክu/g, "ኩ");
	char = char.replace(/ክi/g, "ኪ");
	char = char.replace(/ክa/g, "ካ");
	char = char.replace(/ከe/g, "ኬ");
	char = char.replace(/ክé/g, "ኬ");
	char = char.replace(/ክo/g, "ኮ");
	char = char.replace(/ካa/g, "ኳ");

	char = char.replace(/ክኅ/g, "ኽ");
	char = char.replace(/ኽe/g, "ኸ");
	char = char.replace(/ኽu/g, "ኹ");
	char = char.replace(/ኽi/g, "ኺ");
	char = char.replace(/ኽa/g, "ኻ");
	char = char.replace(/ኸe/g, "ኼ");
	char = char.replace(/ኽé/g, "ኼ");
	char = char.replace(/ኽo/g, "ኾ");

	char = char.replace(/ኽው/g, "ዅ");
	char = char.replace(/ዅe/g, "ዀ");
	char = char.replace(/ዅu/g, "ዂ");
	char = char.replace(/ዅi/g, "ዂ");
	char = char.replace(/ዅa/g, "ዃ");
	char = char.replace(/ዀe/g, "ዄ");
	char = char.replace(/ዅé/g, "ዄ");

	// kw
	char = char.replace(/ክው/g, "ኵ");
	char = char.replace(/ኵe/g, "ኰ");
	char = char.replace(/ኵi/g, "ኲ");
	char = char.replace(/ኵa/g, "ኳ");
	char = char.replace(/ኰe/g, "ኴ");
	char = char.replace(/ኵé/g, "ኴ");

	char = char.replace(/K/g, "ኽ");
	char = char.replace(/ክኅ/g, "ኽ");
	char = char.replace(/ኽe/g, "ኸ");
	char = char.replace(/ኽu/g, "ኹ");
	char = char.replace(/ኽi/g, "ኺ");
	char = char.replace(/ኽa/g, "ኻ");
	char = char.replace(/ኽe/g, "ኼ");
	char = char.replace(/ኽé/g, "ኼ");
	char = char.replace(/ኽo/g, "ኾ");
	char = char.replace(/ኽW/g, "ዃ");
	char = char.replace(/ዃe/g, "ዀ");
	char = char.replace(/ዃu/g, "ዅ");
	char = char.replace(/ዃi/g, "ዂ");
	char = char.replace(/ዃa/g, "ዃ");
	char = char.replace(/ዀe/g, "ዄ");
	char = char.replace(/ዃé/g, "ዄ");
	char = char.replace(/ዃ'/g, "ዅ");

	char = char.replace(/[Zž]/g, "ዥ");
	char = char.replace(/ዝህ/g, "ዥ");
	char = char.replace(/ዥe/g, "ዠ");
	char = char.replace(/ዥu/g, "ዡ");
	char = char.replace(/ዥi/g, "ዢ");
	char = char.replace(/ዥa/g, "ዣ");
	char = char.replace(/ዠe/g, "ዤ");
	char = char.replace(/ዥé/g, "ዤ");
	char = char.replace(/ዥo/g, "ዦ");
	char = char.replace(/ዣa/g, "ዧ");

	char = char.replace(/[yY]/g, "ይ");
	char = char.replace(/ይe/g, "የ");
	char = char.replace(/ይu/g, "ዩ");
	char = char.replace(/ይi/g, "ዪ");
	char = char.replace(/ይa/g, "ያ");
	char = char.replace(/የe/g, "ዬ");
	char = char.replace(/ይé/g, "ዬ");
	char = char.replace(/ይo/g, "ዮ");
	char = char.replace(/ያa/g, "ዯ");

	char = char.replace(/d/g, "ድ");
	char = char.replace(/ድe/g, "ደ");
	char = char.replace(/ድu/g, "ዱ");
	char = char.replace(/ድi/g, "ዲ");
	char = char.replace(/ድa/g, "ዳ");
	char = char.replace(/ደe/g, "ዴ");
	char = char.replace(/ድé/g, "ዴ");
	char = char.replace(/ድo/g, "ዶ");
	char = char.replace(/ዳa/g, "ዷ");

	char = char.replace(/ድድ/g, "ዽ");
	char = char.replace(/[Dḍ]/g, "ዽ");
	char = char.replace(/ዽe/g, "ዸ");
	char = char.replace(/ዽu/g, "ዹ");
	char = char.replace(/ዽi/g, "ዺ");
	char = char.replace(/ዽa/g, "ዻ");
	char = char.replace(/ዸe/g, "ዼ");
	char = char.replace(/ዽé/g, "ዼ");
	char = char.replace(/ዽo/g, "ዾ");
	char = char.replace(/ዻa/g, "ዿ");

	char = char.replace(/[jJ]/g, "ጅ");
	char = char.replace(/ጅe/g, "ጀ");
	char = char.replace(/ጅu/g, "ጁ");
	char = char.replace(/ጅi/g, "ጂ");
	char = char.replace(/ጅa/g, "ጃ");
	char = char.replace(/ጀe/g, "ጄ");
	char = char.replace(/ጅé/g, "ጄ");
	char = char.replace(/ጅo/g, "ጆ");
	char = char.replace(/ጃa/g, "ጇ");

	char = char.replace(/g/g, "ግ");
	char = char.replace(/ግe/g, "ገ");
	char = char.replace(/ግu/g, "ጉ");
	char = char.replace(/ግi/g, "ጊ");
	char = char.replace(/ግa/g, "ጋ");
	char = char.replace(/ገe/g, "ጌ");
	char = char.replace(/ግé/g, "ጌ");
	char = char.replace(/ግo/g, "ጎ");
	char = char.replace(/ጋa/g, "ጓ");

	// gw
	char = char.replace(/ግው/g, "ጕ");
	char = char.replace(/ጕe/g, "ጐ");
	char = char.replace(/ጕi/g, "ጒ");
	char = char.replace(/ጕa/g, "ጓ");
	char = char.replace(/ጐe/g, "ጔ");
	char = char.replace(/ጕé/g, "ጔ");

	char = char.replace(/ግግ/g, "ጝ");
	char = char.replace(/[ǧG]/g, "ጝ");
	char = char.replace(/ጝe/g, "ጘ");
	char = char.replace(/ጝu/g, "ጙ");
	char = char.replace(/ጝi/g, "ጚ");
	char = char.replace(/ጝa/g, "ጛ");
	char = char.replace(/ጘe/g, "ጜ");
	char = char.replace(/ጝé/g, "ጜ");
	char = char.replace(/ጝo/g, "ጞ");
	char = char.replace(/ጛa/g, "ጟ");

	char = char.replace(/[Tṭ]/g, "ጥ");
	char = char.replace(/ትህ/g, "ጥ");
	char = char.replace(/ጥe/g, "ጠ");
	char = char.replace(/ጥu/g, "ጡ");
	char = char.replace(/ጥi/g, "ጢ");
	char = char.replace(/ጥa/g, "ጣ");
	char = char.replace(/ጠe/g, "ጤ");
	char = char.replace(/ጥé/g, "ጤ");
	char = char.replace(/ጥo/g, "ጦ");
	char = char.replace(/ጣa/g, "ጧ");

	char = char.replace(/[Cċ]/g, "ጭ");
	char = char.replace(/ችህ/g, "ጭ");
	char = char.replace(/ጭe/g, "ጨ");
	char = char.replace(/ጭu/g, "ጩ");
	char = char.replace(/ጭi/g, "ጪ");
	char = char.replace(/ጭa/g, "ጫ");
	char = char.replace(/ጨe/g, "ጬ");
	char = char.replace(/ጭé/g, "ጬ");
	char = char.replace(/ጭo/g, "ጮ");
	char = char.replace(/ጫa/g, "ጯ");

	char = char.replace(/p̣/g, "ጵ");
	char = char.replace(/P/g, "ጵ");
	char = char.replace(/ፕህ/g, "ጵ");
	char = char.replace(/ጵe/g, "ጰ");
	char = char.replace(/ጵu/g, "ጱ");
	char = char.replace(/ጵi/g, "ጲ");
	char = char.replace(/ጵa/g, "ጳ");
	char = char.replace(/ጰe/g, "ጴ");
	char = char.replace(/ጵé/g, "ጴ");
	char = char.replace(/ጵo/g, "ጶ");
	char = char.replace(/ጳa/g, "ጷ");

	char = char.replace(/[Sṣ]/g, "ጽ");
	char = char.replace(/ትስ/g, "ጽ");
	char = char.replace(/ጽe/g, "ጸ");
	char = char.replace(/ጽu/g, "ጹ");
	char = char.replace(/ጽi/g, "ጺ");
	char = char.replace(/ጽa/g, "ጻ");
	char = char.replace(/ጸe/g, "ጼ");
	char = char.replace(/ጽé/g, "ጼ");
	char = char.replace(/ጽo/g, "ጾ");
	char = char.replace(/ጻa/g, "ጿ");

	char = char.replace(/ṣ́/g, "ፅ");
	char = char.replace(/ትዝ/g, "ፅ");
	char = char.replace(/ፅe/g, "ፀ");
	char = char.replace(/ፅu/g, "ፁ");
	char = char.replace(/ፅi/g, "ፂ");
	char = char.replace(/ፅa/g, "ፃ");
	char = char.replace(/ፀe/g, "ፄ");
	char = char.replace(/ፅé/g, "ፄ");
	char = char.replace(/ፅo/g, "ፆ");
	char = char.replace(/ፃa/g, "ፇ");

	char = char.replace(/[fF]/g, "ፍ");
	char = char.replace(/ፍe/g, "ፈ");
	char = char.replace(/ፍu/g, "ፉ");
	char = char.replace(/ፍi/g, "ፊ");
	char = char.replace(/ፍa/g, "ፋ");
	char = char.replace(/ፈe/g, "ፌ");
	char = char.replace(/ፍé/g, "ፌ");
	char = char.replace(/ፍo/g, "ፎ");
	char = char.replace(/ፋa/g, "ፏ");

	// non identif
	//char = char.replace(/ፍY/g, "ፚ");
	//char = char.replace(/ፚa/g, "ፚ");

	char = char.replace(/p/g, "ፕ");
	char = char.replace(/ፕe/g, "ፐ");
	char = char.replace(/ፕu/g, "ፑ");
	char = char.replace(/ፕi/g, "ፒ");
	char = char.replace(/ፕa/g, "ፓ");
	char = char.replace(/ፐe/g, "ፔ");
	char = char.replace(/ፕé/g, "ፔ");
	char = char.replace(/ፕo/g, "ፖ");
	char = char.replace(/ፓa/g, "ፗ");

	// pharyngale
	char = char.replace(/X/g, "ዕ");
	char = char.replace(/ዕe/g, "ዐ");
	char = char.replace(/ዕu/g, "ዑ");
	char = char.replace(/ዕi/g, "ዒ");
	char = char.replace(/ዕa/g, "ዓ");
	char = char.replace(/ዐe/g, "ዔ");
	char = char.replace(/ዕé/g, "ዔ");
	char = char.replace(/ዕo/g, "ዖ");

	char = char.replace(/E/g, "ዐ");
	char = char.replace(/U/g, "ዑ");
	char = char.replace(/I/g, "ዒ");
	char = char.replace(/A/g, "ዓ");
	char = char.replace(/ዐዐ/g, "ዔ");
	char = char.replace(/É/g, "ዔ");
	char = char.replace(/O/g, "ዖ");

	// glottales
	char = char.replace(/x/g, "እ");
	char = char.replace(/እe/g, "አ");
	char = char.replace(/እu/g, "ኡ");
	char = char.replace(/እi/g, "ኢ");
	char = char.replace(/እa/g, "ኣ");
	char = char.replace(/አe/g, "ኤ");
	char = char.replace(/እé/g, "ኤ");
	char = char.replace(/እo/g, "ኦ");
	char = char.replace(/ኣa/g, "ኧ");

	char = char.replace(/e/g, "አ");
	char = char.replace(/u/g, "ኡ");
	char = char.replace(/i/g, "ኢ");
	char = char.replace(/a/g, "ኣ");
	char = char.replace(/አአ/g, "ኤ");
	char = char.replace(/é/g, "ኤ");
	char = char.replace(/o/g, "ኦ");
	char = char.replace(/ኣኣ/g, "ኧ");

	//ponctuation
	char = char.replace(/\\-/g, "፧");
	char = char.replace(/\\\./g, "።");
	char = char.replace(/\,/g, "፣");
	char = char.replace(/\;/g, "፤");
	char = char.replace(/\\\:/g, "፥");
	char = char.replace(/\\\!/g, "፦");
	char = char.replace(/\\\//g, "፨");

	char = char.replace(/\\/g, "\\");
	char = char.replace(/\\1/g, "፩");
	char = char.replace(/\\2/g, "፪");
	char = char.replace(/\\3/g, "፫");
	char = char.replace(/\\4/g, "፬");
	char = char.replace(/\\5/g, "፭");
	char = char.replace(/\\6/g, "፮");
	char = char.replace(/\\7/g, "፯");
	char = char.replace(/\\8/g, "፰");
	char = char.replace(/\\9/g, "፱");
	char = char.replace(/\\፩0/g, "፲");
	char = char.replace(/\\፪0/g, "፳");
	char = char.replace(/\\፫0/g, "፴");
	char = char.replace(/\\፬0/g, "፵");
	char = char.replace(/\\፭0/g, "፶");
	char = char.replace(/\\፮0/g, "፷");
	char = char.replace(/\\፯0/g, "፸");
	char = char.replace(/\\፰0/g, "፹");
	char = char.replace(/\\፱0/g, "፺");
	char = char.replace(/\\፲0/g, "፻");
	char = char.replace(/\\፳0/g, "፪፻");
	char = char.replace(/\\፺0/g, "፱፻");
	char = char.replace(/\\፻0/g, "፲፻");
	char = char.replace(/\\፲፻0/g, "፼");

	var startPos = e.target.selectionStart;
	var endPos = e.target.selectionEnd;

	var beforeLen = e.target.value.length;
	var afterLen = char.length;
	var adjustment = afterLen - beforeLen;

	e.target.value = char;
	e.target.selectionStart = startPos + adjustment;
	e.target.selectionEnd = endPos + adjustment;
	// var obj = e.target;
	// obj.focus();
	// obj.scrollTop = obj.scrollHeight;
};

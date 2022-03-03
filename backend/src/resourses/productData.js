const categories = ["Running", "Lifestyle", "Básquetbol", "Entrenamiento"]

// {
//     "name": 
//     "description":
//     "image":
//     "stock": 
//     "price": 
//     "brand": 
//     "model": 
//     "category": 
//     "gender": 
//     "size": 
// },

const products = [
    
    {
        "name": "Tenis Nano X1",
        "description": "Entrenar es parte esencial de tu rutina diaria. En ese momento no importa nada más. Perfeccionados con la retroalimentación de atletas de élite, los tenis Reebok Nano X1 están diseñados para entrenar al máximo. Esta versión para mujer viene con una capellada de tejido Flexweave®, transpirable y duradera, con soporte integrado para movimientos multidireccionales. ",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a81494d22474cd0ae49ad3d00c96204_9366/Tenis_Nano_X1_Amarillo_GZ5392_01_standard.jpg",
        "stock": 10,
        "price": 90,
        "brand": "Reebok",
        "model": "GZ5392",
        "category": "Entrenamiento",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"] 
    },
    {
        "name": "Tenis Nano X3",
        "description": " La amortiguación de espuma Floatride Energy en la parte delantera ofrece una sensación reactiva. Clip en el talón para mayor estabilidad.",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a6958547518f4ffea27bad3d00c880c2_9366/Tenis_Nano_X1_Negro_GZ8948_01_standard.jpg",
        "stock": 15,
        "price": 90,
        "brand": "Reebok",
        "model": "GZ8948",
        "category": "Entrenamiento",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"] 
    },
    {
        "name": "Tenis Flexagon Energy Train 3",
        "description": "Flota como una mariposa, entrena de forma salvaje. Estos tenis de training Reebok para mujer presentan una estructura liviana, diseñada a la medida para mantenerte ligero cuando tu entrenamiento requiere movimientos dinámicos.",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0c6efa0793ff47be9ecdad7901034e34_9366/Tenis_Flexagon_Energy_Train_3_Negro_GZ0295_01_standard.jpg",
        "stock": 15,
        "price": 70,
        "brand": "Reebok",
        "model": "GZ0295",
        "category": "Entrenamiento",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"] 
    },
    {
        "name": "Tenis Princess",
        "description": "Deslumbra a todos con los tenis más cómodos que hayas usado jamás. Su capellada de piel sintética te brinda comodidad al instante. Al igual que su suave forro interior de polar. La amortiguación y la comodidad están garantizadas gracias a la mediasuela de EVA y a la plantilla de espuma acolchada",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a42e3a3c11ca471caeefadcf013955a3_9366/Tenis_Princess_Blanco_GY6182_01_standard.jpg",
        "stock": 15,
        "price": 70,
        "brand": "Reebok",
        "model": "GY6182",
        "category": "Entrenamiento",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"] 
    },
    {
        "name": "Tenis Reago Essential 2 Reebok",
        "description": "Cuando no paras en todo el día, el confort es prioridad. Estos tenis Reebok para mujer te dan lo que necesitas, gracias a su mediasuela FuelFoam que ofrece el balance óptimo entre amortiguación y respuesta.",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a56f7cbf472462cb052ad09009690b7_9366/Tenis_Reago_Essential_2_Reebok_Negro_GZ8307_01_standard.jpg",
        "stock": 5,
        "price": 70,
        "brand": "Reebok",
        "model": "GZ8307",
        "category": "Entrenamiento",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"] 
    },
    {
        "name": "Tenis Rider V",
        "description": "Desde el amanecer hasta el crepúsculo, mantén tu look impecable con estos tenis Reebok Rider V. Inspirado en el rango de running de los 90 y 2000, este par te ofrece comodidad y un diseño futurista. Si la suave capellada de tela no es suficiente para convencerte, la mediasuela y plantilla de espuma acolchada definitivamente lo harán.",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/30c2b53c7c784e4b880eadcf01399e2e_9366/Tenis_Rider_V_Azul_GZ3109_01_standard.jpg",
        "stock": 10,
        "price": 90,
        "brand": "Reebok",
        "model": "GZ3109",
        "category": "Running",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis Zig Dynamica 3",
        "description": "Enfréntate al futuro. Estos tenis de running Reebok para hombre están confeccionados con un sistema de retorno de energía del talón a la punta, que amortigua tus pies para ayudarte a llegar más lejos. Su diseño liviano te permite mover tus pies con total comodidad y confianza. Su suela innovadora devuelve la energía de cada pisada y te impulsa hacia delante.",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e5a731a877b4196a5d2adbe00e909a1_9366/Tenis_Zig_Dynamica_3_Multicolor_GY7706_01_standard.jpg",
        "stock": 5,
        "price": 90,
        "brand": "Reebok",
        "model": "GY7706",
        "category": "Running",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis Reebok Royal Classic Jogger 3.0",
        "description": "Estilo running retro con todas las de ganar. Estos tenis de inspiración ochentera vienen en un diseño deportivo e impecable. Las franjas laterales contrastantes reflejan un estilo Reebok de herencia. El diseño en tonos oscuros neutros les confiere un look minimalista. La capellada con revestimientos mezcla gamuza sintética y tela para darles una vibra vintage.",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0e99d21c45247ffb39fae27006fc02a_9366/Tenis_Reebok_Royal_Classic_Jogger_3.0_Rojo_GW7772_01_standard.jpg",
        "stock": 8,
        "price": 80,
        "brand": "Reebok",
        "model": "GW7772",
        "category": "Running",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis Kamikaze II",
        "description": "Consigue un look tan audaz como tu juego. Entra en la cancha con los Reebok Kamikaze II para hombre. Este estilo icónico recibe una actualización con nuevos colores que llevarán tu look a otro nivel. Sus colores llamativos causarán impacto. Las palabras sobran.",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5d83814ff8b04a0990e7ad4700f9ac53_9366/Tenis_Kamikaze_II_Negro_H01316_01_standard.jpg",
        "stock": 10,
        "price": 110,
        "brand": "Reebok",
        "model": "H01316",
        "category": "Básquetbol",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis Question Mid",
        "description": "No te quedes viendo la acción. Entra en el juego y anota puntos por tu estilo con estos tenis Question Mid para hombre. En colores icónicos y con un diseño retro de corte medio para un look de la vieja escuela. Claramente, las palabras sobran.",
        "image": "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/deac5a3ee59e42e98e91ad2c0065581b_9366/Tenis_Question_Mid_Azul_H01281_01_standard.jpg",
        "stock": 10,
        "price": 110,
        "brand": "Reebok",
        "model": "H01281",
        "category": "Básquetbol",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    
    {
        "name": "Tenis PUMA x MAISON KITSUNE Suede Crepe",
        "description": "La colaboración PUMA x MAISON KITSUNE fusiona el sello discográfico y de moda francés / japonés con la credibilidad del streetwear de PUMA. Para nuestra segunda colección, la siempre fresca gamuza ha sido reelaborada utilizando una auténtica suela de crepé como característica clave y una paleta de colores café con leche fresca. Para los amantes de la moda, la música ... y el café.",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/381270/01/sv01/fnd/MEX/",
        "stock": 5,
        "price": 120,
        "brand": "Puma",
        "model": "381270_01",
        "category": "Lifestyle",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis CA Pro Classic",
        "description": "Desde que PUMA California original fue lanzado en la década de 1980, ha estado dejando su huella en las calles. Una nueva incorporación a la familia de calzado, los tenis CA Pro Classic cuentan con todos los distintivos de la silueta icónica, como líneas limpias, pero añaden perforaciones perfectas y una entresuela moldeada. Inspiradas en la herencia, pero perfectas para hoy en día, estos tenis inspirados en la costa oeste hacen que el aspecto sencillo sea elegante.",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/380190/02/sv01/fnd/MEX/",
        "stock": 10,
        "price": 150,
        "brand": "Puma",
        "model": "380190_02",
        "category": "Lifestyle",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis Running Resolve para Hombre",
        "description": "HISTORIA DEL PRODUCTO abrir nuevos caminos en el concepto zapatilla de running con nuestra determinación de los zapatos corrientes, equipadas con lo último en tecnología de atletismo incluyendo CMEVA moldeada por compresión para un liso, paso acolchado y una suela de goma para el rebote final.",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/194739/03/sv01/fnd/MEX/",
        "stock": 6,
        "price": 130,
        "brand": "Puma",
        "model": "194739_03",
        "category": "Running",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis de running para hombre Magnify Nitro",
        "description": "Dicho de forma sencilla, estas zapatillas te siguen ofreciendo lo mejor. Para empezar, tienen una mediasuela con NITRO FOAM, la tecnología avanzada de PUMA diseñada para ofrecer una adaptación y una amortiguación increíbles. A esto se suma PUMAGRIP, el compuesto de goma duradero de la suela exterior que te aporta tracción en casi cualquier superficie. Así que cuando la comodidad es tu máxima prioridad, pero no quieres sacrificar el estilo, estas zapatillas son tu elección.",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/195170/02/sv01/fnd/MEX/",
        "stock": 10,
        "price": 130,
        "brand": "Puma",
        "model": "195170_02",
        "category": "Running",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis Flyer Runner",
        "description": "Atrae todas las miradas con el diseño superelegante de los tenis para correr de tecnología avanzada Flyer, perfectos tanto para el día a día como para entrenamiento avanzado. Con un exterior de malla transpirable y vanguardista, una entresuela ligera y un refuerzo en el talón, derrocharás estilo en cada paso.",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/192257/02/sv01/fnd/MEX/",
        "stock": 10,
        "price": 130,
        "brand": "Puma",
        "model": "192257_02",
        "category": "Running",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Tenis de running Mujer Magnify Nitro",
        "description": "¿Qué te ofrecen estas zapatillas de running? Amortiguación y comodidad máximas en todas las carreras. Gracias a la mediasuela con tecnología NITRO FOAM, sentirás una adaptación y amortiguación superiores en un empaque ligero. Además, la suela exterior con el compuesto de goma PUMAGRIP proporciona tracción en todo tipo de superficies. Son unas zapatillas elaboradas para durar, creadas para el performance y diseñadas para el estilo.",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/195172/05/sv01/fnd/MEX/",
        "stock": 20,
        "price": 100,
        "brand": "Puma",
        "model": "195172_05",
        "category": "Running",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
        "name": "Tenis FLYER Runner Mesh Running",
        "description": "Aquí tienes un zapato que te brinda las dos cosas que deseas en un zapato: estilo y comodidad. Con su plantilla SoftFoam y su entresuela de EVA, está diseñado para una comodidad y una amortiguación personalizadas que hay que experimentar para creer. En cuanto al estilo, está el moderno diseño de la parte superior que brinda un enfoque estilístico a una zapatilla para correr liviana para todos los días.",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/195343/08/sv01/fnd/MEX/",
        "stock": 10,
        "price": 90,
        "brand": "Puma",
        "model": "195172_05",
        "category": "Running",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
        "name": "Tenis Running COMET 2 ALT Beta",
        "description": "No deje atrás la comodidad cuando se esfuerce al siguiente nivel. Tu próxima carrera se deslizará gracias a la tecnología SOFTRIDE de PUMA en los zapatos para correr COMET 2 ALT Beta. Esta pieza deportiva y elegante tiene un ajuste seguro para que su rendimiento se base en un soporte seguro.",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/195109/13/sv01/fnd/MEX/",
        "stock": 10,
        "price": 80,
        "brand": "Puma",
        "model": "195109_13",
        "category": "Running",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
        "name": "Tenis Cali Wedge Mix para Mujer",
        "description": "Deja que tu estilo alcance nuevas alturas con esta versión más audaz de nuestro diseño clásico California. Presentando una suela Chunky llamativa para un look por completo vanguardista, este modelo brinda todo para un estilo con mucha actitud urbana",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/373906/08/sv01/fnd/MEX/",
        "stock": 5,
        "price": 90,
        "brand": "Puma",
        "model": "373906_08",
        "category": "Lifestyle",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
        "name": "Tenis Mujer Future Rider Soft",
        "description": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/381141/03/sv01/fnd/MEX/",
        "image": "Nacido en 1980, el Fast Rider se lanzó justo cuando la carrera comenzaba a moverse de la pista a las calles. Diseñado para terrenos más impredecibles, el zapato presentaba una parte superior de nailon acolchado ultraligero y nuestra suela Federbein suprema que absorbe los golpes. Este año, la versión icónica está de regreso, esta vez como Future Rider. Elegantes y deportivas, con líneas largas y limpias, combinaciones de colores geniales y una amortiguación cómoda, estas zapatillas clásicas están listas para sacudir la carretera.",
        "stock": 8,
        "price": 90,
        "brand": "Puma",
        "model": "381141_03",
        "category": "Lifestyle",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },             
    
    {
        "name": "TENIS POSTMOVE MID",
        "description": "Inspirados en los archivos de adidas Basketball, estos tenis son la combinación perfecta entre deporte y estilo. Sus revestimientos icónicos les imprimen una estética tipo vintage a este modelo actualizado. Incorporan un panel Cloudfoam que ofrece una comodidad duradera y un diseño Geofit alrededor del tobillo que proporciona un ajuste ideal.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ee2703e7adb4545bbfcadcb0116ec66_9366/Tenis_Postmove_Mid_Blanco_GZ1338_01_standard.jpg",
        "stock": 50,
        "price": 250,
        "brand": "Adidas",
        "model": "GZ1338",
        "category": "Básquetbol",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "TENIS DONOVAN MITCHELL D.O.N. ISSUE #3 - STARS OF UTAH",
        "description": "Descubre los D.O.N. Issue #3: Los tenis Stars of Utah de adidas Basketball se inspiran en los cielos magníficos del lugar que Donovan Mitchell ahora llama hogar. Un exterior oscuro luce detalles neón de color morado y azul inspirados en las hermosas imágenes nocturnas de las Salinas de Bonneville, una de las atracciones turísticas más visitadas de Utah.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ce99bbe2a83462f9becadf80180ba8d_9366/Tenis_Donovan_Mitchell_D.O.N._Issue_3_-_Stars_of_Utah_Negro_GZ5526_01_standard.jpg",
        "stock": 10,
        "price": 220,
        "brand": "Adidas",
        "model": "GZ5526",
        "category": "Básquetbol",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "TENIS ULTRABOOST WEB DNA",
        "description": "La comodidad que caracteriza al running se combina con el estilo descomplicado en estos tenis adidas Ultraboost Web DNA. El diseño entrelazado en la mediasuela y la suela revela la amortiguación Boost de retorno de energía que llevan dentro. ",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68c2c9f823864c989889adf3002540ec_9366/Tenis_Ultraboost_Web_DNA_Gris_GZ1594_01_standard.jpg",
        "stock": 5,
        "price": 200,
        "brand": "Adidas",
        "model": "GZ1594",
        "category": "Entrenamiento",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "TENIS ASWEETRAIN",
        "description": "Es viernes en la noche. Todos salieron o ya están durmiendo. Y sin embargo tú aún estás en el gimnasio. Como siempre. Estos tenis adidas para entrenar te ayudan a lograr tus objetivos, incluso cuando crees que ya no puedes más. La amortiguación ligera en la mediasuela se encarga de imprimrle suavidad a cada pisada.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b80dfea9bc8a4837ac4caba20125d964_9366/Tenis_Asweetrain_Negro_FW1669_01_standard.jpg",
        "stock": 50,
        "price": 100,
        "brand": "Adidas",
        "model": "FW1669",
        "category": "Entrenamiento",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },    
    {
        "name": "TENIS SUPERSTAR",
        "description": "La historia de adidas se basa en el deporte y uno de los momentos decisivos en su trayectoria fue el lanzamiento de los tenis adidas Superstar. En honor a su legado, esta versión presenta un diseño clásico en piel suave con puntera de caucho y las 3 Franjas con contorno bordado.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00544dc4580642b294aeadc801768588_9366/Tenis_Superstar_Blanco_GX6026_01_standard.jpg",
        "stock": 30,
        "price": 110,
        "brand": "Adidas",
        "model": "GX6026",
        "category": "Lifestyle",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "TENIS ADIDAS GRAND COURT BASE",
        "description": "Rinde homenaje al estilo retro de las canchas. Estos tenis de piel sintética suave se inspiran en los diseños deportivos de la década de los 70. Lucen las 3 Franjas en contraste en el lateral exterior y las 3 Franjas cosidas en el lateral interior. Su amortiguación ultrasuave le imprime comodidad a cada uno de tus pasos.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b89b660f4b742afa4fbaa4300c0c76f_9366/Tenis_adidas_Grand_Court_Base_Blanco_EE7874_01_standard.jpg",
        "stock": 80,
        "price": 90,
        "brand": "Adidas",
        "model": "EE7874",
        "category": "Lifestyle",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
        "name": "TENIS ADIZERO ADIOS PRO 2.0",
        "description": "El legado se combina con la innovación para crear el calzado ideal para los corredores que buscan romper récords. Creados a partir de datos e ideas de algunos de los atletas más rápidos del mundo, los adizero Adios Pro 2 incorporan las tecnologías más innovadoras.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c007fb1afb0b452bb595ad2400b201f0_9366/Tenis_Adizero_Adios_Pro_2.0_Azul_FY4082_01_standard.jpg",
        "stock": 10,
        "price": 120,
        "brand": "Adidas",
        "model": "FY4082",
        "category": "Running",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
        "name": "TENIS X9000L1",
        "description": "Estos tenis de running adidas mantienen tus pies cómodos sin importar si estás corriendo en una pista o por las calles de la ciudad. Con un exterior ajustado y la amortiguación Bounce en la mediasuela ligera, mantienen tus pies frescos y listos para la acción desde el primer hasta el último paso.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cdd84bf9b76d4319ba76ad1a00b351af_9366/Tenis_X9000L1_Turquesa_H00578_01_standard.jpg",
        "stock": 15,
        "price": 120,
        "brand": "Adidas",
        "model": "H00578",
        "category": "Running",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
        "name": "CALZADO DE FÚTBOL LIGRA 7 CANCHA CUBIERTA",
        "description": "Creado para rendir en todo tipo de canchas, este calzdo de fútbol adidas Ligra 7 te ayudará a mejorar tu juego en cancha cubierta. El exterior de malla transpirable brinda comodidad y sujeción incluso en los momentos más intensos del partido.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b39c906ad5b4e83846bad1a00a24732_9366/Calzado_de_Futbol_Ligra_7_Cancha_Cubierta_Negro_GY7648_01_standard.jpg",
        "stock": 20,
        "price": 90,
        "brand": "Adidas",
        "model": "GY7648",
        "category": "Entrenamiento",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
        "name": "TENIS STRUTTER",
        "description": "Combina tu pasión por la marca de las 3 Franjas con un look urbano de inspiración retro. Estos tenis lucen una mediasuela extragruesa que amortigua tus pasos para mantener tus pies cómodos en todo momento.",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f38640567544309ad9aad200017d6d5_9366/Tenis_Strutter_Blanco_H05127_01_standard.jpg",
        "stock": 20,
        "price": 100,
        "brand": "Adidas",
        "model": "H05127",
        "category": "Entrenamiento",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },                    
    
    {
        "name": "Air Jordan 1 High '85" ,
        "description": "La carrera de MJ está llena de jugadas legendarias, pero la primera vez que saboreó la gloria fue a nivel universitario, el 29 de marzo de 1982. El Air Jordan 1 High '85, que ha regresado con su porte y forma en cuero premium, ahora debuta en el modelo “College Navy” para rendir homenaje al partido del campeonato universitario que MJ jugó aquel día. Conmemora el aniversario 40 del momento en que MJ ganó el título durante su época universitaria con este ícono original." ,
        "image":"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/62a299aa-42be-40eb-b520-aa56f2118ae2/fecha-de-lanzamiento-del-air-jordan-1-high-85-college-navy-bq4422-400.jpg" ,
        "stock": 5,
        "price": 215,
        "brand": "Nike",
        "model": "SGD-10",
        "category": "Lifestyle",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Air Jordan XXXVI",
        "description": "El Air Jordan XXXVI no es solo el siguiente modelo de esta icónica franquicia, sino que es una expresión del impulso y la energía que provocaron una revolución en el básquetbol.Es uno de los calzados de básquetbol Air Jordan más ligeros hasta la fecha, y cuenta con una parte superior minimalista pero duradera de tejido de Leno reforzado con una cinta de TPU.También viene equipado con una unidad Zoom Air Strobel de largo completo cosida directamente a la parte superior, apilada con una unidad Zoom Air debajo del antepié, lo que proporciona una sensación de retorno de energía y capacidad de respuesta de élite.Entra en la cancha con la confianza de que hagas lo que hagas, será pan comido.",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/66748c08-075c-4554-a50e-0ebb90f8c85d/calzado-de-b%C3%A1squetbol-air-jordan-36-0CKrQR.png",
        "stock": 3,
        "price": 200,
        "brand": "Nike",
        "model": "CZ2650-001",
        "category": "Básquetbol",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "LeBron 19",
        "description": "LeBron se destaca cuando hay mucho en juego y la presión está al máximo.El LeBron 19 aprovecha esa energía con un ajuste firme y un sistema de amortiguación actualizado.La funda interior cómoda está unida por un revestimiento esculpido a través del cual se introducen las agujetas para evitar que el pie se mueva dentro del calzado.",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b155760-7f13-4feb-8200-c5ec59a1166f/calzado-de-b%C3%A1squetbol-lebron-19-9zN45v.png",
        "stock": 2,
        "price": 240,
        "brand": "Nike",
        "model": "DC9339-400",
        "category": "Básquetbol",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Nike Air Max Alpha Trainer 4",
        "description": "Conquista tus entrenamientos más intensos con el Nike Air Max Alpha Trainer 4. La amplia base plana y la amortiguación Nike Air brindan comodidad y estabilidad para el levantamiento de pesas. El talón está rediseñado con almohadillas de soporte que ayudan a aligerar tus series más pesadas. ",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/75de0008-d37b-4a30-a022-1679079e3937/calzado-de-entrenamiento-air-max-alpha-trainer-4-wPp852.png",
        "stock": 5,
        "price": 200,
        "brand": "Nike",
        "model": "CW3396-004",
        "category": "Entrenamiento",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Nike SuperRep Go 2",
        "description": "El Nike SuperRep Go 2 con toques moteados combina una amortiguación ligera en la planta del pie y una malla transpirable en la parte superior para que te muevas cómodamente en las clases de condición física en circuito o mientras entrenas en casa.",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2461e74c-1ba0-4974-83f2-84379db65869/calzado-de-entrenamiento-superrep-go-2-6rrBhG.png",
        "stock": 10,
        "price": 180,
        "brand": "Nike",
        "model": "DH2728-091",
        "category": "Entrenamiento",
        "gender": "Men",
        "size": ["25", "25.5", "26", "26.5", "27", "27.5", "28"]
    },
    {
        "name": "Nike Dunk High Up",
        "description": "Nunca es un mal momento para mantenerse a la altura.El Nike Dunk High Up, creado para la cancha y adaptado al estilo urbano, eleva el ícono del básquetbol de los 80.Este calzado, con el clásico diseño de perfil alto, espíritu tipo deportivo y entresuela elevada, se mantiene fiel a la esencia del básquetbol mientras te permite canalizar tu confianza con cada paso.",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/68d91b36-364f-4395-89e0-e1970089609c/calzado-dunk-high-up-DKdvP1.png",
        "stock": 10,
        "price": 199,
        "brand": "Nike",
        "model": "DH3718-106",
        "category": "Lifestyle",
        "gender": "Women",
        "size": ["23", "24", "25", "25.5"]
    },
    {
    "name": "Air Jordan 1 Mid",
    "description": "El calzado Air Jordan 1 Mid aporta estilo en toda la cancha y comodidad premium a un look icónico. La unidad Air-Sole amortigua el juego en las canchas de básquetbol, al tiempo que la zona del tobillo acolchada proporciona una sensación de sujeción.",
    "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f338fd51-46f5-4764-9c3b-6424bb515640/calzado-air-jordan-1-mid-xMNLGv.png",
    "stock": 8,
    "price": 159,
    "brand": "Nike",
    "model": "BQ6472-300",
    "category": "Lifestyle",
    "gender": "Women",
    "size": ["23", "24", "25", "25.5"]
    },
    {
    "name": "Nike Air Zoom Rival Fly 3",
    "description": "Da tus primeros pasos en velocidad con el Nike Air Zoom Rival Fly 3.Confeccionado para entrenar y competir, ofrece soporte y comodidad para mantener el pie en su sitio.Su diseño duradero proporciona resistencia a la abrasión donde más la necesitas, mientras que una espuma suave y una unidad Zoom Air ofrecen sensación de agilidad a medida que te acercas a la meta.",
    "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6f9513ab-8f51-4cf7-8d27-31dc0dfc3db4/calzado-de-carrera-air-zoom-rival-fly-3-3DhWTX.png",
    "stock": 15,
    "price": 150,
    "brand": "Nike",
    "model": "CT2406-700",
    "category": "Running",
    "gender": "Women",
    "size": ["23", "24", "25", "25.5"]
    },
    {
    "name": "Nike React Miler 2",
    "description": "Cuando el running se convierte en un hábito diario, la estabilidad y la comodidad son cruciales.El Nike React Miler 2 ofrece rendimiento, trayendo de nuevo la amortiguación suave y el diseño intuitivo de su predecesor.La parte superior rediseñada reduce el volumen y ofrece soporte y una sensación de seguridad en las carreras largas y cortas.",
    "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/74bbeb85-a70f-46ca-a226-47ac64ad829c/calzado-de-running-en-carretera-react-miler-2-bnl0HC.png",
    "stock": 6,
    "price": 150,
    "brand": "Nike",
    "model": "CW7136-500",
    "category": "Running",
    "gender": "Women",
    "size": ["23", "24", "25", "25.5"]
    },
    {
    "name": "Nike Pegasus Trail 3",
    "description": "Encuentra tus alas en una carrera todoterreno. El Nike Pegasus Trail 3 cuenta con la misma comodidad amortiguada que te encanta en un diseño que hace alusión al look clásico del Pegasus. Ofrece 'una tracción resistente para favorecer tu avance en el terreno rocoso. El mayor soporte en el mediopié te ayuda a sentirte segura en tu viaje.",
    "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/609263c1-2c57-4646-991e-3dc0195f2b1e/calzado-de-carreras-de-sendero-pegasus-trail-3-kXQ1np.png",
    "stock": 6,
    "price": 170,
    "brand": "Nike",
    "model": "DA8698-401",
    "category": "Running",
    "gender": "Women",
    "size": ["23", "24", "25", "25.5"]
    }
]
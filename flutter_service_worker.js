'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6ca98ac903226c368261778f730df01c",
"index.html": "b42b9999d1b5cef5334e3e101541594f",
"/": "b42b9999d1b5cef5334e3e101541594f",
"main.dart.js": "4e6ebdd232967dc267f3f4e30972b440",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "538d8343741bcd09eacddc38f550d46d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "85b8ac96dd2f0f735bd558273c964a6c",
".git/config": "e326ca8166d4ad991b9b4f3f6f7d111b",
".git/objects/59/61b229259de3b6d27194d07927b1a39207d6b0": "0bd351bc5552684a48f92827ca80bf61",
".git/objects/92/6324ba346a080e779717302db53087e97732d0": "75b0c1041cece2a853ebbeea7309850b",
".git/objects/92/c7c0bc14ccab50ca80bc5b01df81bfea40ade1": "4e7153f7e95bb80228d6989d63f2f424",
".git/objects/50/831cb529942140ae02457ba03cd81ac8a2631e": "6f0e2673560990fd340918bae5028ddc",
".git/objects/03/3bcf2c4aac6cfc87d7667c889da34dc6f73d01": "60df40d6011a6e22812801a9235d9e31",
".git/objects/9e/ffa0a375dddd1a4b72beebffbc0555e4c105b6": "c1e851051f9a113fb646704764f1031f",
".git/objects/9e/f8d2566781154f87b29acc7abf8f9192531de3": "572a3cb88b4bd595b5296677f770617e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/78b927b654d33e5daf0e6882f687e3aa2ec5dd": "6cbe7ea3e17a90f3b523de1cc96844fb",
".git/objects/69/f7a3a8781cf31f400e5b27f96675c721c756df": "ce3684ceabc6ca2bf64b0f779e323d6e",
".git/objects/3c/484f4d92e6009999c056e1d7fdff17caf85437": "83c0940394c2688e5bbee2602f878031",
".git/objects/56/174108150c9ace81fe7a27d5c0dbd078900fae": "8497e8ffdaa85976d13c3b37223191db",
".git/objects/3d/d01e87b4be733d70ea0e9c99e1ec67c4c0d36e": "80f92214ef185b7d70bf97fb2a0308e0",
".git/objects/3d/e236010cd39c23f553258cad2bfae3eda0026c": "de7f4e242e03803201a7d73a3c434256",
".git/objects/58/8bc1aefc3bb287f94dcf25992fe538d8a75b07": "fb77ac5f4828f2804df293ffd6f42f12",
".git/objects/0b/ea2fed76722b9e52307a67bf32d07565e17d2d": "507128f58a615a35222eeab062cd1619",
".git/objects/93/acdbe649f7f7ae4d0f350dac30311c54c5ba23": "ba34b08961869a368c2277f41437bc93",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/bca0c96fd0958531acc57c1313e1143f3dbcbc": "de4171b5e34e5fbabe411617cdcedc67",
".git/objects/5f/40677e4c1a75a6ccd615ece1cedca88da7ffdd": "a368a9b99290c19983abdca1aa4439b2",
".git/objects/33/d4326ab1e52ecbeed333c26cde5cf828435106": "e701ad71448252fede29620bf90570ec",
".git/objects/33/40b68d1b0917331ba1f0d1cfe085e9c307f69e": "976a05e7fa49d0d5d47ac0b71191d974",
".git/objects/b5/cb1b1e1e39e30a8a8e2597a25ee780ca28157e": "b32df373f29e008f1346ea9ee210f463",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/c01ee0efd62a51bd7f3de688161e9851801e75": "7f8a3d023bfbc2a94b86fec6ede60ac6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/430bae8747953ec83805831389ab6c1bcb3134": "6b084483499b985f5a740109f08d44d1",
".git/objects/bd/22efedfb046c7940b46ee6908aacf8c571396b": "8ea74cd4e5eb2dfd925fed64d4e679d5",
".git/objects/d6/54bf697fbd1473ff9d6f0415b77872f62a2dd8": "b3384bb94dd4e5ffa9356f7780060d78",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/828e9fa9de80fea4776298df10e053f29da83b": "f38d9c6094590d7a37e4e15c141d8e3a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/f4fdef90c864201ea113bcb86057b622834c98": "55eb849ae57712f0acb63b04473f66c3",
".git/objects/c0/54c0727351e71fe3548e70a0546e8a96d66d99": "955814150432ccd52f690ed5e8329fd8",
".git/objects/c0/685f3815ea1614be20c05c9211d656f21eb696": "4de9b8dd986e2952021844dbba38d2ab",
".git/objects/fc/c431f878f06bddc5bb9e7cfbb963085e0da76d": "ca071b7d66355f9015004dad7aef9901",
".git/objects/fd/d6dcedb290277d7a4919af87208b371e03d48f": "5ae42b796535d671e86b3e9c8dceb20a",
".git/objects/f2/9ed02d4e4498f0f5bd8a0a4e03bb209743d651": "97e2a61dc3fb9ef789836f74022fc9a1",
".git/objects/f5/71d92068dc677e3aba9c7b6ec828c285a4da82": "a8fb4c2a590fd54b39ac4119d56ecd0c",
".git/objects/ca/eb63e3adfe8e9a21f5cf03c7c7a7b8a8a0a7e3": "5f451a7315cc64117c05d0c529d8e349",
".git/objects/ed/d1ef9d0834e6e009cfa2ca02276dc778342279": "b9d81ccde074f1665d7d526c4f175379",
".git/objects/c1/04a0b0b3affd10afbfdb6667fd2e8f6212366b": "c1da49c0adb003f4c82fdc1323cbfcaf",
".git/objects/c6/da73b74886c0fbcf64549032dbb2ccf705d914": "d8e5c0b2b3ee4ecaa51d9766d64a207a",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/b9c2f0dc48ac968fe2950d448e0e04c7e6bb42": "594b661ad9d5de7b27f3dc5fd405116e",
".git/objects/27/0673f7ba76f8832202a741e1f26b9bf05dd107": "bd1d729b17bafaffebb81de79ea18911",
".git/objects/27/314508499c33373e76a9344591f71d8b527227": "43701b4639300f0e429de02bad6a0382",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/73f01496c72d700266757c0ae2c5b71d0f3a3a": "7de3fb56be13020df74fe6c61b1dfbf6",
".git/objects/16/984ce3641fe2d2a05e4b0344b905617a39edfe": "52048a199f790b967a8946d94187d35b",
".git/objects/45/f598d89cd29869c4be00dbae9ebffa241fdec9": "83cb90ae9b899e70978f815faab111af",
".git/objects/1f/9eebab182130a549f99c8b23a779eeee3fc932": "025ddb5ed98258fe21838ccd9c9773d0",
".git/objects/87/d97eff0a5742d6479b9b389f66b10311c79574": "58ac1fb802569bb51a77b8487f409935",
".git/objects/87/80f9437428ee28b62b16adbcf98d1fd29f7484": "2e2cb52c6f96a2e470b7253836fd5334",
".git/objects/74/af98a628ee077866670f25dd2c7607e508e961": "9497920dc33035b08f427862e8d0398b",
".git/objects/8a/3b071b8501774dee80a6f0c45d2b56f9b17d47": "01084533bc001cb1e27b8629314271a5",
".git/objects/7e/1d53e1c7b2ca4729303c2b6fa52d2a704bb31c": "af6bb020c7a5736753ee81f46aaacf3d",
".git/objects/4c/36ac1d301fcc2aac6d54b7686138152bdc3cb4": "92116071df1f6a08372ff69130f13c08",
".git/objects/81/3381e7462996968ce1075360a12ed4760503b6": "f33b6ae1772c555521ed7c9a9937cb4c",
".git/objects/81/969ad27efbdc5ec0d231884d9c4b222d822efa": "2e50152fc9649f3828898d204332f063",
".git/objects/44/4121616cc7a5738b6cb7c7c0dd70d52640acfb": "aad227f401ce62db6891b4e9f5020b34",
".git/objects/2a/c088bc7e94c8feff46311be0ce6c1cec8b772d": "cad7eec43cb798afd16b0d0fb670beb9",
".git/objects/2a/08f4abdcf00df69fca84de4ee231489945c180": "bf9290679283995745a0648cfdd0fadf",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/de2c407fb3778d148c82a437423b7c2b79e333": "c171669596cbebb3aefa7f396b4750c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/b4ea6b1a0d5bee58cb2b635192685d9cff2543": "e0bea61757ce06feb4a00e7c8264bac8",
".git/objects/00/bf0e0cf8801c04f116a391f6ffc277ad1194f3": "ace3f563ae84e29abfaa48ef1b04349c",
".git/objects/36/0c109fdf7ef3a45a27e2bad3e065256b1c8fd7": "e44a354dfd1533ec0d9acdbc6cbe25d3",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/91/787b21b3a6c90469858270c19727edb8cb12f2": "21c9fa370fb30d45b8bfb7c24204a9c7",
".git/objects/65/ab3eefec7e9118e71b78d22e55ff9bef7a4775": "ace51e05bcd569d8e3df2a09d060e201",
".git/objects/65/41e9d87e656f7b341c853abb4ced9a6397ef39": "e73ebf51faff6dfce005f934b38c2ed4",
".git/objects/65/a1143f1b64972ad193f13666a179344c6a4898": "2a872eee862a0ca25254ebdef0fc5326",
".git/objects/62/75783ad92427ecab975c01f387dd14b13ad225": "286e4a920ddb78641a709bcdfafe2480",
".git/objects/3a/0b0a7758613cf3e314cc676a03cea1ef41fdeb": "15bdbe5db8e0a7a89e8ffbfa6609066b",
".git/objects/3a/9c3a1cca750f4c03a35a1620cf9cbb2283a288": "8dfab1add7bf3d04263ed4f9c12d0163",
".git/objects/98/9764cc22f653c14100d3ac0241e8a81bba5f68": "7ef8cd23a376e9f45cb362ef582bdbc5",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/bc309a6238c515ad28d7e3581aee438eb8b515": "07ec6b04bcf4cf8c4eed7910955ce781",
".git/objects/3f/89e19818474288906545c069969d125a54cae3": "4891938b3fdbc6627398a1f889b2aa59",
".git/objects/30/c047199dbeeff350928036bb92122033bdb277": "3c1685535a25f92dcff217863ec3f5b5",
".git/objects/37/83768fca97fd20d787c4d05d8f873817183d99": "3d95ced58d1e20228a0c0a48ea1bdadd",
".git/objects/08/14eab8b8c1f1666c988fc01b8e3b03d23565c0": "bd9390874f52b3bae3629f0587952031",
".git/objects/01/5a412c1abf1df233a619ec09e5ff8e37607c7b": "c9d484175d3a552f5a7680c742106b29",
".git/objects/06/7f4b5e11128953e6e3c98fd1f8a39199bb3352": "ee142256e2611c4c2edca16521646fde",
".git/objects/55/08dabf6d47f516b5a844947a33aa8a5bcfc9fc": "a5b95ebbd61bdf521a0901652e1da158",
".git/objects/55/8611604fab9d8a245766780bb9d939d0a10b8c": "23ca884fffce09cfba31377401585be9",
".git/objects/97/2ebc3d748b04869f8022f505c4f1968ee5b7c0": "1b945affcad62d4114fd8a8c670e7fcf",
".git/objects/0a/fae81c8cad8ad7d102a541af36c76d211b7286": "248fb529ab1b4f1534537836ddc9be3e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/dbd260ea08bf7542d9e1bf19200881900ee3cd": "832fd1dad03a5bb4dbff72906e775a6a",
".git/objects/b8/0214a552c611276ec937c9b7072c3d6dc420c8": "b337f1337f3ec343894c347641eac62a",
".git/objects/dd/cd67db34053f5c4942d547a865a79bb5491317": "5558df7f4823d873aed6d3dc16ed60f9",
".git/objects/d5/918c2e334e368de254bd7e15b7096894e1ef51": "c165368e58048c0a8850a89d9245dea1",
".git/objects/d2/d3042e335753cb4444e49f9637ab48f2d0063e": "b4c4e60470fc2b45944565002ce71ef5",
".git/objects/d2/71e8c3924b70634792db235dfa24f914c3acf6": "ebc081ed62bda9e7df3238c1ced12389",
".git/objects/af/87cc4b7a4efc9df8d8502c815f96e92497fe65": "87e555e5ee462d920148a4b70f52a1bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9770d9c3e98d43efa9c19da177c513c5151086": "b2a063a4c9b71fc1e6d01d4582250dd6",
".git/objects/a6/87d302472e8ad35c5c59536e078c16583d8d3c": "0f7622c42d017ebefab8b3d0d69871e1",
".git/objects/a6/9cb039d5db92ff1dbe5a3598be6b73abbf05f8": "ea109752e34ccafe2cb0a8d1a9e461e8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/d2dd9c7fd2a1a04044fcb4f887806918a9594f": "413e3cb96276f8146863b759368b41c9",
".git/objects/e1/bac51a1b86ef7116f7f6512893a642af29278e": "440817450d3888fadae4d715f93696b5",
".git/objects/e1/d20ce4045b5e5e04c21e1758f543186892db49": "76f007ad034aa32a1ed2fe423d5f8e3e",
".git/objects/cd/a5d8f49ee4b47680fbe1ba8b78fe25dd748e53": "48eed68c1c96a1bddf9f4a281b73c739",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/42db83060d78e7f710ad445e042cc2b72545ed": "3fb1bdde627157b277b7cf211c619166",
".git/objects/e8/8782bf0ba9f73ed088bcab9762792081713d6c": "c670c7acf256e7dfc95df26eb986c7a9",
".git/objects/ff/e26a807e1c077a774891c65ac4a583bcb3d570": "9da82211a0d59713074acf7366321ef8",
".git/objects/c2/daa283d5a1550cb410db70f2d147d5364e6651": "ef58c79e118d66011038f0b0f195d327",
".git/objects/c2/4b5a046f5d68148fabd54107d4c81b7b5aca37": "0082409a92d42e74c311b46209fc5ecf",
".git/objects/e7/c63dfd3b577984324e123dc2f688d391f553e1": "2a88d4ef092ee4cd314c47bd1fc9b5b6",
".git/objects/79/11c5cf79677df579bb9935e769e3c165b037f8": "0b39533114b00e6a09d2fdabd0bb0427",
".git/objects/41/179118f9e7d362279a2c1806cbc167714977a1": "2997b072055e3b5264b8101eae6a7edf",
".git/objects/1b/f1a88feb755c13c88cca5b3508c31894a59eb8": "5064432cd021b7ae934c9688bada3ed5",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/863f4c70f7b67b8444537bb3bf8542530f98b0": "a27b8def0fdfaf4a6c152f1dd9dc780f",
".git/objects/4a/be16e5c1fc110c4245933978c425f4a5cc0e53": "656fe8274671bbb22b369e0428fc67ea",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/813c4c944619a219e9e163ab72e8804bcb779c": "98e2dc841d0baf627b91fbd09d902713",
".git/objects/71/792a6754f01a2767a6e971183a8ccbb14ef2ff": "c1189ac34a811015dfa8d0ad633bc625",
".git/objects/82/f05cc677d852a0ed5d1bcc300b7639ec77a77e": "d55f4a652f75ff1b5e1a33a51ab3cc01",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/25/dd9f61542e612d2d629242e051e1726d846260": "6de0df6585bc0f565ce4732532e184f5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dfc7a8fad40deafb8deb15973c008e28",
".git/logs/refs/heads/main": "20e7a7fa274ef287095db2f7bd2ca8f8",
".git/logs/refs/remotes/origin/main": "2809204de845070f74fb40dbec01cb6d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7b49c86c7a09fce76e4a54ae45bc02af",
".git/refs/remotes/origin/main": "7b49c86c7a09fce76e4a54ae45bc02af",
".git/index": "84e5b9b1f2a0ebc04cecbc5162252041",
".git/COMMIT_EDITMSG": "df4c160c76c5fb0e55324d958fdbab3c",
"assets/AssetManifest.json": "428c6ac9e5ed493b35f3094c174d322e",
"assets/NOTICES": "69cc0eb6a827692e16f6d56094b08369",
"assets/FontManifest.json": "f1fc8cb2281b74036f261a39bd940d15",
"assets/AssetManifest.bin.json": "6443cab9a91f75cb86e30911f9d89b86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "91321707ecdfd51cc080ee209b9a300d",
"assets/fonts/MaterialIcons-Regular.otf": "eec65473d55bee97bcba5ea2c7ed57ba",
"assets/assets/music/FanQuan-Deleted.wav": "2a6b4736594c9f8cc0b3e230c77d7d06",
"assets/assets/music/README.md": "035041cfb2070f794172dedb2aa709b6",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/sprites/vf8_2_sprite.png": "c814a6a4638451408fd7ad4935f5f66a",
"assets/assets/images/sprites/vfe34_3_sprite.png": "3b7ddb1c567ae49f6bb61911cc3b4e57",
"assets/assets/images/sprites/C_3_sprite.png": "3b7ddb1c567ae49f6bb61911cc3b4e57",
"assets/assets/images/sprites/end_bg.png": "c8936fe754ba3efc5b37e886972729c0",
"assets/assets/images/sprites/customer_sprite.png": "46934cc2f9e90108f0a370f653c82c9a",
"assets/assets/images/sprites/vf6_3_sprite.png": "4cc80263aad767863df92c14b26d163a",
"assets/assets/images/sprites/vbus_0_sprite.png": "c7b757cca91358260263aa7ff77550a1",
"assets/assets/images/sprites/vf7_sprite.png": "19943d5e06b991ad7e72e87614e940ca",
"assets/assets/images/sprites/end_old_bg.png": "c3a1ebcae4e0e0c9ddbaaf5ada0617cd",
"assets/assets/images/sprites/police_2_sprite.png": "f0e701206cbae241045721a475ca3001",
"assets/assets/images/sprites/feliz_3_sprite.png": "5b610414ab4253ed0c8d83739f515023",
"assets/assets/images/sprites/vf9_2_sprite.png": "5af309e9ffdc22671723cbc9925e9985",
"assets/assets/images/sprites/T_sprite.png": "c4b7e0a9820fd100fc6eb5f407923f29",
"assets/assets/images/sprites/vf7_3_sprite.png": "710045d436e9fc2ef70e68b3b75650b1",
"assets/assets/images/sprites/vbus_sprite.png": "9a7ee371802142d10e23bf18ade3c526",
"assets/assets/images/sprites/C_1_sprite.png": "26f41f0e88ea8953bcbcdbc1a3b95fd6",
"assets/assets/images/sprites/vfe34_1_sprite.png": "26f41f0e88ea8953bcbcdbc1a3b95fd6",
"assets/assets/images/sprites/vf8_0_sprite.png": "13fcc91f300019bbd0d543e096fb7142",
"assets/assets/images/sprites/S_sprite.png": "6e37fae7e21dda5ab17a5d421cb8c9d3",
"assets/assets/images/sprites/house_sprite.png": "a3513529ba982a1e01088b55d2026e42",
"assets/assets/images/sprites/vf8_sprite.png": "13fcc91f300019bbd0d543e096fb7142",
"assets/assets/images/sprites/vf6_1_sprite.png": "b0190397a9475d3242f9414bca849e2a",
"assets/assets/images/sprites/vbus_2_sprite.png": "53bf1b49752344b8c25f74b4afced20b",
"assets/assets/images/sprites/H1_sprite.png": "cdd5ec2a516ba705066fc69482cd4d4b",
"assets/assets/images/sprites/vf9_0_sprite.png": "138c58e2ea3c0f5989ffb15982f071c2",
"assets/assets/images/sprites/police_0_sprite.png": "69a245e41f5a3611fe563e7e086eafc9",
"assets/assets/images/sprites/feliz_1_sprite.png": "a4eeb1f39e392ab4f9c1b490401799ca",
"assets/assets/images/sprites/vf7_1_sprite.png": "6020039bd17b7b2cbd9e8499ea0bc9ee",
"assets/assets/images/sprites/police_sprite.png": "69a245e41f5a3611fe563e7e086eafc9",
"assets/assets/images/sprites/background.png": "6a82eead5b7512f6e48dee822c739e16",
"assets/assets/images/sprites/feliz_2_sprite.png": "edad362dfcedaf4173b5309ca78aa54b",
"assets/assets/images/sprites/police_3_sprite.png": "30691d5cabefb8897f6bd60a02cfa553",
"assets/assets/images/sprites/start_bg.png": "c8936fe754ba3efc5b37e886972729c0",
"assets/assets/images/sprites/vf9_3_sprite.png": "d3942956f7f0f3e3546b3ad260721f90",
"assets/assets/images/sprites/logo.png": "be240fbd98116a1c7784813655d7e9bc",
"assets/assets/images/sprites/vf7_2_sprite.png": "64106e042ed7f5e427225927773169cc",
"assets/assets/images/sprites/vf8_3_sprite.png": "2a74216672edb6142aa3a6cb82877aed",
"assets/assets/images/sprites/vfe34_2_sprite.png": "e0c8c54de3ed35a1a608d263d9e40b67",
"assets/assets/images/sprites/C_2_sprite.png": "e0c8c54de3ed35a1a608d263d9e40b67",
"assets/assets/images/sprites/vfe34_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
"assets/assets/images/sprites/vbus_1_sprite.png": "e840b459ae3a83dd09d70fcf60d09099",
"assets/assets/images/sprites/vf6_2_sprite.png": "c84c0ec6d48605bef4a43417e62bbeeb",
"assets/assets/images/sprites/vf6_sprite.png": "e2b4bfdb3b0d9bb40eac6e2eb85ff7fd",
"assets/assets/images/sprites/feliz_sprite.png": "2ccfaab42b3f6edc1fae8cc68beee77a",
"assets/assets/images/sprites/C_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
"assets/assets/images/sprites/background-dark.jpg": "c8183b0a6477e876c060fc49578720e2",
"assets/assets/images/sprites/vehicles/vf7.png": "b54aab09b1e7f5f98c7402901e543fc6",
"assets/assets/images/sprites/vehicles/vf6.png": "59b2f93fda8cda959dd4dd51db0c97ba",
"assets/assets/images/sprites/vehicles/vfe34.png": "5b4cff7c9ec8157d977ff6636dee01bc",
"assets/assets/images/sprites/vehicles/feliz.png": "7f07c32d3d571d26ca99f298ff56fc0a",
"assets/assets/images/sprites/vehicles/vbus.png": "167a3816fc1dd2d7488d57fbcad0ff59",
"assets/assets/images/sprites/vehicles/vf8.png": "569060865ce1993e422df12427105c25",
"assets/assets/images/sprites/vehicles/vf9.png": "e95ad367922ef941aacbcf0be5288db5",
"assets/assets/images/sprites/vf9_1_sprite.png": "8f832b9b279711f4bf0a81bda879c8fe",
"assets/assets/images/sprites/feliz_0_sprite.png": "2ccfaab42b3f6edc1fae8cc68beee77a",
"assets/assets/images/sprites/police_1_sprite.png": "8f61a559225c4472a3334f104aa775a4",
"assets/assets/images/sprites/I_sprite.png": "632270f290ff65432d4f589686f2986d",
"assets/assets/images/sprites/vf7_0_sprite.png": "19943d5e06b991ad7e72e87614e940ca",
"assets/assets/images/sprites/leaf_sprite.png": "96ffba8215b65e59bd267e26b4fe8e4d",
"assets/assets/images/sprites/C_0_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
"assets/assets/images/sprites/L_sprite.png": "fcdf41cf72c2aa30d788894df18872fb",
"assets/assets/images/sprites/vf9_sprite.png": "138c58e2ea3c0f5989ffb15982f071c2",
"assets/assets/images/sprites/vfe34_0_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
"assets/assets/images/sprites/vf8_1_sprite.png": "75fea5bb98cec904329d14ce586f312d",
"assets/assets/images/sprites/vbus_3_sprite.png": "49a1e56e86d5d337c334d966ac135cd9",
"assets/assets/images/sprites/vf6_0_sprite.png": "e2b4bfdb3b0d9bb40eac6e2eb85ff7fd",
"assets/assets/images/2x/settings.png": "8404e18c68ba99ca0b181bd96ace0376",
"assets/assets/images/2x/restart.png": "83aea4677055df9b0d8171f5315f2a60",
"assets/assets/images/2x/back.png": "85cda8f41a13153d6f3fb1c403f272ea",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/3.5x/settings.png": "c977a1e6c59e8cfd5cd88a0c973928fc",
"assets/assets/images/3.5x/restart.png": "583169ac365d9515fc12f29e3b530de0",
"assets/assets/images/3.5x/back.png": "85db134e26410547037485447f659277",
"assets/assets/sfx/start.mp3": "a05ea3d2e5ba61dbce9262e96883a0f4",
"assets/assets/sfx/won.wav": "f18b57ee9568589d2f719d26f69f9943",
"assets/assets/sfx/rotate.mp3": "cc20c5e2dac0edfac3434b1d44f2ed7e",
"assets/assets/sfx/tap.mp3": "753f11fcdc693eb9953bdac8721e2e3c",
"assets/assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/fonts/Electric/electric.ttf": "93bf9b4db74c47f60e87947d92c94ace",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

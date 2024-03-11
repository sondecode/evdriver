'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6ca98ac903226c368261778f730df01c",
"index.html": "753558bfe0e065c2474be178c8fad716",
"/": "753558bfe0e065c2474be178c8fad716",
"main.dart.js": "b1c590ce04986d0f9117ebde334e7d77",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "538d8343741bcd09eacddc38f550d46d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "85b8ac96dd2f0f735bd558273c964a6c",
".git/config": "e326ca8166d4ad991b9b4f3f6f7d111b",
".git/objects/61/a5cf372fad29c60926d6d1d6ef28a5c2cf7f07": "c23c6364f55874a989a8be55efb5e74a",
".git/objects/0d/b6128e23ec4f5525e9e2604b834dd2b6ac87b1": "9698daa02a49da53279f9c82481f0e6c",
".git/objects/59/61b229259de3b6d27194d07927b1a39207d6b0": "0bd351bc5552684a48f92827ca80bf61",
".git/objects/92/6324ba346a080e779717302db53087e97732d0": "75b0c1041cece2a853ebbeea7309850b",
".git/objects/92/c7c0bc14ccab50ca80bc5b01df81bfea40ade1": "4e7153f7e95bb80228d6989d63f2f424",
".git/objects/50/831cb529942140ae02457ba03cd81ac8a2631e": "6f0e2673560990fd340918bae5028ddc",
".git/objects/68/c34c7b2e0ce07da364c8eb34d8989fd11b2a62": "607ad76c080d807ae8ff601e9b4864a6",
".git/objects/03/3bcf2c4aac6cfc87d7667c889da34dc6f73d01": "60df40d6011a6e22812801a9235d9e31",
".git/objects/03/bfda25dc59f00291d7e530ee3a7f8b395bc65e": "0492107ae9ecab1f1f213da364e659f6",
".git/objects/9e/ffa0a375dddd1a4b72beebffbc0555e4c105b6": "c1e851051f9a113fb646704764f1031f",
".git/objects/9e/f8d2566781154f87b29acc7abf8f9192531de3": "572a3cb88b4bd595b5296677f770617e",
".git/objects/04/84ff42196f08ef9ad2e5485ffd054f081563f4": "38eea674eb18190cccc5d979b485c51d",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/d56efbc7e43254d4c192f0f1a13d281721c56a": "62f36df0f434b7dd04310724df9f7038",
".git/objects/32/5b8d58d0aa047dad99afad4dcc67390cc7fca2": "a0cb763d58c0ecb19511fd40f38a6e81",
".git/objects/35/78b927b654d33e5daf0e6882f687e3aa2ec5dd": "6cbe7ea3e17a90f3b523de1cc96844fb",
".git/objects/69/f7a3a8781cf31f400e5b27f96675c721c756df": "ce3684ceabc6ca2bf64b0f779e323d6e",
".git/objects/3c/484f4d92e6009999c056e1d7fdff17caf85437": "83c0940394c2688e5bbee2602f878031",
".git/objects/56/c567a1809c674ad83de27608270696caf689d4": "4dcb2b6d73a47246cc6054939a9fa9c7",
".git/objects/56/174108150c9ace81fe7a27d5c0dbd078900fae": "8497e8ffdaa85976d13c3b37223191db",
".git/objects/3d/139ed94154855aee708f008fc30ea873c5b0ef": "c8fbd331628fc2c3f1395c0ea51e1c05",
".git/objects/3d/d01e87b4be733d70ea0e9c99e1ec67c4c0d36e": "80f92214ef185b7d70bf97fb2a0308e0",
".git/objects/3d/e236010cd39c23f553258cad2bfae3eda0026c": "de7f4e242e03803201a7d73a3c434256",
".git/objects/58/8bc1aefc3bb287f94dcf25992fe538d8a75b07": "fb77ac5f4828f2804df293ffd6f42f12",
".git/objects/67/c9ef0ab84e927519732c7e5031d07c379e8258": "c45fca490c1c1909847dac3c51277c42",
".git/objects/0b/ea2fed76722b9e52307a67bf32d07565e17d2d": "507128f58a615a35222eeab062cd1619",
".git/objects/93/8abf94ecc0ba5df07d44defa64dca354d61239": "d14584e6a46f45584ecdedde950de652",
".git/objects/93/acdbe649f7f7ae4d0f350dac30311c54c5ba23": "ba34b08961869a368c2277f41437bc93",
".git/objects/94/59ddc12c8d31bbe10d0641580c35d9c2be9dc0": "3916e8f08d9b2e0c4df09c8133d59074",
".git/objects/94/e9538295934a04c77742a67f1b8a669c02de95": "fa530e8f36869727b632841a53f4b425",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/06befb3260a0fd462d6231ea4d73d54b9a241a": "d988b38d693a48c6469294ae16bab93c",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/f9334a4e16259cd93df0c449d3f9b0c57b1e2c": "c9d52cc00dd027ff154b041236ba489b",
".git/objects/60/bca0c96fd0958531acc57c1313e1143f3dbcbc": "de4171b5e34e5fbabe411617cdcedc67",
".git/objects/5f/40677e4c1a75a6ccd615ece1cedca88da7ffdd": "a368a9b99290c19983abdca1aa4439b2",
".git/objects/33/d4326ab1e52ecbeed333c26cde5cf828435106": "e701ad71448252fede29620bf90570ec",
".git/objects/33/1f49eb4c88f74c55c1ab935fd346734e24b625": "3a4838e902f853a323e70b17366be8da",
".git/objects/33/40b68d1b0917331ba1f0d1cfe085e9c307f69e": "976a05e7fa49d0d5d47ac0b71191d974",
".git/objects/9d/7f688b54b28d6c3b60e33f0c05f9a37326ce73": "586cc8a86e132288053a3ed006e4b061",
".git/objects/9c/6b72a40214dc0b0148e725126bd355bfddc110": "48e2dd7252f6b0e8403d7c077b5c47b2",
".git/objects/b5/cb1b1e1e39e30a8a8e2597a25ee780ca28157e": "b32df373f29e008f1346ea9ee210f463",
".git/objects/d9/f1dee568dca7801bb8b398770db2fca6d7cb20": "5b56c59320f1647483901f23b6c46c99",
".git/objects/ac/6aff0d2622d8cc4db229a591708d9fb6327c7d": "53b61c910d10b50a375e9da78b80152f",
".git/objects/ac/1d45f34377dbef3182d9f8d9433c4514abf61f": "59f552cbd020dafd2d31c8df55aeb85d",
".git/objects/ac/18dd5ead79b2afb58fdae17087afd5da67d770": "5c1470976f28b3ef368aa9ac82dd8687",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/cc5929d1870d5c262980b2ef6a05f49d99ccdb": "af1e29b4c3c306a84902b42d34eb9f77",
".git/objects/d7/888f22f933c0d373ef1ac8a471380642b7120c": "0a065941470ef46f8536a0f65680155b",
".git/objects/df/c01ee0efd62a51bd7f3de688161e9851801e75": "7f8a3d023bfbc2a94b86fec6ede60ac6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/4e69c5353632a3b9d63d66759a6f1f54a06d7e": "d848c78b51595c59f8ca6c9fbf71611f",
".git/objects/b4/ec1a526cddde1f05a174f89a6fb39f1020b0af": "d7bba159475f5c922f5549e6f6e1ea6b",
".git/objects/a2/430bae8747953ec83805831389ab6c1bcb3134": "6b084483499b985f5a740109f08d44d1",
".git/objects/bd/22efedfb046c7940b46ee6908aacf8c571396b": "8ea74cd4e5eb2dfd925fed64d4e679d5",
".git/objects/d6/54bf697fbd1473ff9d6f0415b77872f62a2dd8": "b3384bb94dd4e5ffa9356f7780060d78",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/9c6dec47c676f46520ebed41aabf7870d32b43": "f5c7103a8f954d2b0337d11a109907ab",
".git/objects/bc/a3a993bcbdb9667f5723b286d3eafbcf4ca85d": "2be3bac3768d0ba8c16906d32321e875",
".git/objects/ae/a7164deb62de1171bd67c7c6963549dbb7d2cc": "6c1c1506f142a3be727c635f30555029",
".git/objects/d8/aefacbf562bb6594c503d5a203f80c6ae196a4": "3d08bf43ef4d5f98d122f849070e9a21",
".git/objects/e2/828e9fa9de80fea4776298df10e053f29da83b": "f38d9c6094590d7a37e4e15c141d8e3a",
".git/objects/e2/ef964754ed50f65958668d4832b83736b9da1d": "aa24bf31afdf77e5e9b8b04905a4df8e",
".git/objects/f3/7086d35eef12d111656a85318825db26d515d8": "3f30ce2377cc159a312c92b4819c0476",
".git/objects/f3/e77b0d7a616480514e7dc16b05e782de13d251": "7ec056cf7a96e5a020d16b9f16158b92",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/f918e3a283b445a3c91721857dd4e3cdea7d1a": "0bcae9b68635b60e48fb4cbb764fded7",
".git/objects/c7/70cd77e166deb39b36d9feac6d513c49ac8152": "fbab4a00f53744fa7cc9cdd2ce7ac5f7",
".git/objects/c0/f4fdef90c864201ea113bcb86057b622834c98": "55eb849ae57712f0acb63b04473f66c3",
".git/objects/c0/54c0727351e71fe3548e70a0546e8a96d66d99": "955814150432ccd52f690ed5e8329fd8",
".git/objects/c0/685f3815ea1614be20c05c9211d656f21eb696": "4de9b8dd986e2952021844dbba38d2ab",
".git/objects/c9/b3cc06eb855326e7f63a4526ae9634e29b63bb": "64c40789adb11bf731dcd3396105a1ab",
".git/objects/fc/a3b890a377c165bcf98f6c22cc624572b4e925": "f40b39685a31b8da7b5ad027048a8a7c",
".git/objects/fc/c431f878f06bddc5bb9e7cfbb963085e0da76d": "ca071b7d66355f9015004dad7aef9901",
".git/objects/fd/d86eb8edd2a3a1d305909d596b708092e374b4": "e28cd99c44bd0a99c07d3533a22793da",
".git/objects/fd/d6dcedb290277d7a4919af87208b371e03d48f": "5ae42b796535d671e86b3e9c8dceb20a",
".git/objects/fd/5dca2928e17b182f8415e995895d20412bbe8f": "97b3d2c23f258f9c3d233ce0d3a5d18a",
".git/objects/f2/0b9663546ba9e4c76f15754513772daff19865": "1f9aa665260f1d7bd268f2c58318f168",
".git/objects/f2/9ed02d4e4498f0f5bd8a0a4e03bb209743d651": "97e2a61dc3fb9ef789836f74022fc9a1",
".git/objects/f5/71d92068dc677e3aba9c7b6ec828c285a4da82": "a8fb4c2a590fd54b39ac4119d56ecd0c",
".git/objects/e3/b88538aa6043bb008ee565d18b26aeaac38c67": "cfe67c9238df34c12e05012ce09be93b",
".git/objects/ca/eb63e3adfe8e9a21f5cf03c7c7a7b8a8a0a7e3": "5f451a7315cc64117c05d0c529d8e349",
".git/objects/ca/a69a7ae72cc56dd5c9526012abbdddbfa1f869": "624ca19c61b0d2a39c3b151fee1e320e",
".git/objects/ed/d1ef9d0834e6e009cfa2ca02276dc778342279": "b9d81ccde074f1665d7d526c4f175379",
".git/objects/c1/af05e6d90937a1b3873d061c595bb30abcf10d": "af742be625dbbc2bdc8b39810f6fe0c7",
".git/objects/c1/04a0b0b3affd10afbfdb6667fd2e8f6212366b": "c1da49c0adb003f4c82fdc1323cbfcaf",
".git/objects/c6/da73b74886c0fbcf64549032dbb2ccf705d914": "d8e5c0b2b3ee4ecaa51d9766d64a207a",
".git/objects/ec/4d0456919b6e107e215d0333b9fd7fc23f744b": "8d5db909813543f3f35cea9571f3d401",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/b9c2f0dc48ac968fe2950d448e0e04c7e6bb42": "594b661ad9d5de7b27f3dc5fd405116e",
".git/objects/27/0673f7ba76f8832202a741e1f26b9bf05dd107": "bd1d729b17bafaffebb81de79ea18911",
".git/objects/27/83bfeb4816ce417cdce0c676654fae3b6c5396": "d524f56c536927a20bb49398b032025d",
".git/objects/27/314508499c33373e76a9344591f71d8b527227": "43701b4639300f0e429de02bad6a0382",
".git/objects/27/9fa8f1412f601e7275109e20408b9daf6f8b8b": "e90fd0e5574d913ef672b2c2a860411d",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/73f01496c72d700266757c0ae2c5b71d0f3a3a": "7de3fb56be13020df74fe6c61b1dfbf6",
".git/objects/4b/8ba6310c28316214c08eb03b33151eb8fd600d": "c2251d7f3e44bdb4e184acbecd07be4e",
".git/objects/7d/20777864e35edf32e084afd0dfbaa3dfac5bd0": "a636f25f832a3c392e7cb616224d54a8",
".git/objects/29/915911a9f86e72f75f0ff88f2ae10bd70af4b9": "c7fc325cacb43350da1fadd6a28e1352",
".git/objects/16/984ce3641fe2d2a05e4b0344b905617a39edfe": "52048a199f790b967a8946d94187d35b",
".git/objects/45/f598d89cd29869c4be00dbae9ebffa241fdec9": "83cb90ae9b899e70978f815faab111af",
".git/objects/45/61471fb01f7240b52c6d42fd454462ea5aa41b": "cd629ef907b42a24d2cf1ce48c109501",
".git/objects/1f/9eebab182130a549f99c8b23a779eeee3fc932": "025ddb5ed98258fe21838ccd9c9773d0",
".git/objects/73/f885467cf977770fe4116f6b69f7405a383cd3": "c506281fcc55ee45ae4246896560a4ad",
".git/objects/87/d97eff0a5742d6479b9b389f66b10311c79574": "58ac1fb802569bb51a77b8487f409935",
".git/objects/87/80f9437428ee28b62b16adbcf98d1fd29f7484": "2e2cb52c6f96a2e470b7253836fd5334",
".git/objects/80/e7e0e3b6ad95081b2ea4f0952978f07dc6a262": "aca7351cbbc03c4235fc4a26a0946fb5",
".git/objects/74/af98a628ee077866670f25dd2c7607e508e961": "9497920dc33035b08f427862e8d0398b",
".git/objects/28/cb72e01ce5206d17d35d0c900108135550b8ae": "6a235752a7ffbc72bdda71abbc24310d",
".git/objects/17/53f33883364aaec217fc8ad91bb1bd9f907380": "543ce56bb7e3c8afb70d14f69ea34aee",
".git/objects/8a/907acc2168e1252a1de1c3849cce038fca76a9": "3923c7e1617a561d856e6ecd3f72bfd1",
".git/objects/8a/3b071b8501774dee80a6f0c45d2b56f9b17d47": "01084533bc001cb1e27b8629314271a5",
".git/objects/7e/1d53e1c7b2ca4729303c2b6fa52d2a704bb31c": "af6bb020c7a5736753ee81f46aaacf3d",
".git/objects/4c/c56fa81658eae8caf17de1b7dccaa1b567db03": "e04ba08251819e146d44921785913393",
".git/objects/4c/36ac1d301fcc2aac6d54b7686138152bdc3cb4": "92116071df1f6a08372ff69130f13c08",
".git/objects/75/51ffe7ee2e627636f1e912c63d5ea906b2bc83": "e681c26c86c9948636e71fd3b8b8d0a2",
".git/objects/81/3381e7462996968ce1075360a12ed4760503b6": "f33b6ae1772c555521ed7c9a9937cb4c",
".git/objects/81/969ad27efbdc5ec0d231884d9c4b222d822efa": "2e50152fc9649f3828898d204332f063",
".git/objects/86/e69fd31b4280164b31a6b044d8a4afc4ede9fa": "2594be73bbe9ffdf7b103ae784585b5b",
".git/objects/44/7c4c9ca69275039ba25f71199c31ee096d3ce3": "c62b32cd7267c4134d81322173881895",
".git/objects/44/4121616cc7a5738b6cb7c7c0dd70d52640acfb": "aad227f401ce62db6891b4e9f5020b34",
".git/objects/2a/cd6e5c23668d8c197d24387c256d9aa0a1a694": "5652fe77e8f45f5ca94154a1322c4362",
".git/objects/2a/c088bc7e94c8feff46311be0ce6c1cec8b772d": "cad7eec43cb798afd16b0d0fb670beb9",
".git/objects/2a/08f4abdcf00df69fca84de4ee231489945c180": "bf9290679283995745a0648cfdd0fadf",
".git/objects/2a/16ab27e4a639160ca975d9485f675525c7be5b": "5d3754def803132bc4e9142e4e28c0f2",
".git/objects/43/9bc47a6d7d467649fb4373553b28e347f08c92": "41bbad7dcab0a8a896f3b77588f486ee",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/de2c407fb3778d148c82a437423b7c2b79e333": "c171669596cbebb3aefa7f396b4750c6",
".git/objects/88/a28ccaff535ae60e74fe66a90283342051f0ee": "5dac7673447ca14b98e93a5a7c850571",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9893e0244e12e9770080963e1ebe66604e1eca": "fb04df76d4bae8aecf02f663589fca2c",
".git/objects/07/b4ea6b1a0d5bee58cb2b635192685d9cff2543": "e0bea61757ce06feb4a00e7c8264bac8",
".git/objects/38/cc7a32eb55b08d053e32a95ec81715543a82b3": "041fe108355a658b981f4902378ac800",
".git/objects/38/f255ae86d8db851b287f0d9e6b98887c0c478f": "acfc68c2ddd227309b362d51cfdbdd63",
".git/objects/38/956374fb567d3869343fb82d2633d326930a89": "f31d1fb51e74e668a8ff9f76a3616b65",
".git/objects/00/a891029717551ad8f34952aecef7d9f00aa0ba": "329db69baa8448950cf006cf59a53102",
".git/objects/00/92b1a5b191a92265dfd632a26794e075daac59": "c500c4cb92665c21fc1c4547431e1d81",
".git/objects/00/bf0e0cf8801c04f116a391f6ffc277ad1194f3": "ace3f563ae84e29abfaa48ef1b04349c",
".git/objects/6e/1fda4a2936f9cf96b967f19eec921f6fd00a68": "ac3ccc98f7be4d5854a4603a7d1073e0",
".git/objects/6e/074cbb4d91e8f936a64755bf825027c0970335": "725cf632478c0178269e4bf6d4928480",
".git/objects/36/0c109fdf7ef3a45a27e2bad3e065256b1c8fd7": "e44a354dfd1533ec0d9acdbc6cbe25d3",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5d/643e0a112f6171bf07cc0a91c43b1463b5b2c7": "cdd09c5f8a815631b26da6272bcc25c8",
".git/objects/5d/fbc5776adc082748d64a65bd3c7a06e9fbdf40": "e093e6088a7da1fdafc63fdac8454703",
".git/objects/31/2d71e97860b9876f11296539b1f90f30df9c53": "5e363c22b78c34d20841fcddf1179cc4",
".git/objects/91/fccde128d8d95c43a76a99c04f76ef2185295a": "9464bf2293742be48f036bdaae2989fc",
".git/objects/91/787b21b3a6c90469858270c19727edb8cb12f2": "21c9fa370fb30d45b8bfb7c24204a9c7",
".git/objects/91/700c687ba814c3de908fea3a0c40921660f863": "7b65c8b7752d1f20adb28fd4a2637fb8",
".git/objects/65/ab3eefec7e9118e71b78d22e55ff9bef7a4775": "ace51e05bcd569d8e3df2a09d060e201",
".git/objects/65/41e9d87e656f7b341c853abb4ced9a6397ef39": "e73ebf51faff6dfce005f934b38c2ed4",
".git/objects/65/a1143f1b64972ad193f13666a179344c6a4898": "2a872eee862a0ca25254ebdef0fc5326",
".git/objects/62/75783ad92427ecab975c01f387dd14b13ad225": "286e4a920ddb78641a709bcdfafe2480",
".git/objects/96/42295666c99ba06484191c1f31676ae6b17bac": "4f7751e3ba306a83bbf3abc89d247899",
".git/objects/96/9fb8a38c8c67df452aa47770d2109d93df20f8": "c804168510336499d312e8310f604468",
".git/objects/3a/0b0a7758613cf3e314cc676a03cea1ef41fdeb": "15bdbe5db8e0a7a89e8ffbfa6609066b",
".git/objects/3a/9c3a1cca750f4c03a35a1620cf9cbb2283a288": "8dfab1add7bf3d04263ed4f9c12d0163",
".git/objects/54/023fc861c0e735f2653ff3dd9a24be77aa965f": "7521ca7547d6ad29e6fafbb7ccb80cb0",
".git/objects/98/d163d1e6d4bf051f457cf27c1212b476a227a0": "159c9e277dfeb4dc0bf4a5b84eccae07",
".git/objects/98/9764cc22f653c14100d3ac0241e8a81bba5f68": "7ef8cd23a376e9f45cb362ef582bdbc5",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/bc309a6238c515ad28d7e3581aee438eb8b515": "07ec6b04bcf4cf8c4eed7910955ce781",
".git/objects/3f/89e19818474288906545c069969d125a54cae3": "4891938b3fdbc6627398a1f889b2aa59",
".git/objects/3f/1c72575b2bf62d2857d12c32497f3c18cef02a": "19af69213d63eeb19f86b6f2d28ed1d4",
".git/objects/30/3f1adf81094798476616fbfc41867a9452b65a": "96f155bdabc36b0b399a6f111486ff7e",
".git/objects/30/c047199dbeeff350928036bb92122033bdb277": "3c1685535a25f92dcff217863ec3f5b5",
".git/objects/5e/7abdaa003b6426d5227e6de9b63e3cf477dc9e": "b38a25819c6173fe5cf9091db1eceed8",
".git/objects/37/83768fca97fd20d787c4d05d8f873817183d99": "3d95ced58d1e20228a0c0a48ea1bdadd",
".git/objects/08/14eab8b8c1f1666c988fc01b8e3b03d23565c0": "bd9390874f52b3bae3629f0587952031",
".git/objects/6d/1543d4067b2d8d616b45dbcfd9697af1f8038b": "972f4ca62046d526d106db36774acd11",
".git/objects/01/a28b0ad79b095ecbf46f2fa1285538ea286221": "af40ac4cb31fcc40ebd968ae815f539d",
".git/objects/01/5a412c1abf1df233a619ec09e5ff8e37607c7b": "c9d484175d3a552f5a7680c742106b29",
".git/objects/06/c159924994df4fe9b3355622df1ad2b18d7302": "6981dd828a037ced235711f00df1cb1d",
".git/objects/06/7f4b5e11128953e6e3c98fd1f8a39199bb3352": "ee142256e2611c4c2edca16521646fde",
".git/objects/99/acf615b37d5634edb93a0b70b99aeaaf443fed": "830eaa77286ecafc18a33b12fcbb59d5",
".git/objects/55/08dabf6d47f516b5a844947a33aa8a5bcfc9fc": "a5b95ebbd61bdf521a0901652e1da158",
".git/objects/55/8611604fab9d8a245766780bb9d939d0a10b8c": "23ca884fffce09cfba31377401585be9",
".git/objects/97/2ebc3d748b04869f8022f505c4f1968ee5b7c0": "1b945affcad62d4114fd8a8c670e7fcf",
".git/objects/63/c5a3106afe348b908cf918bea56892ee06c475": "59c0191327e03d5c2e2b7afb3fa31ed1",
".git/objects/0a/fae81c8cad8ad7d102a541af36c76d211b7286": "248fb529ab1b4f1534537836ddc9be3e",
".git/objects/90/23deef6e89f93985f21e31bfe356a56c2d4282": "3ff2aa01c9b6a2e536e89cb2ec74287c",
".git/objects/90/81e6db29c0ed047c822e6f4c29116e0d393f3c": "75b85bf9b02c8d2ac417a175a8fc99fa",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/21dfc6073b4c11295ee29f8961e2a80d4d21da": "5c933fe968d51551fc864b7b6b7c359e",
".git/objects/a7/dbd260ea08bf7542d9e1bf19200881900ee3cd": "832fd1dad03a5bb4dbff72906e775a6a",
".git/objects/b8/d3ec5b66e2e45a4d33cbb155c49745664491a1": "3dab7af48ad0ab701e144dd1f3ce4c54",
".git/objects/b8/0214a552c611276ec937c9b7072c3d6dc420c8": "b337f1337f3ec343894c347641eac62a",
".git/objects/dd/cd67db34053f5c4942d547a865a79bb5491317": "5558df7f4823d873aed6d3dc16ed60f9",
".git/objects/d5/918c2e334e368de254bd7e15b7096894e1ef51": "c165368e58048c0a8850a89d9245dea1",
".git/objects/d2/d3042e335753cb4444e49f9637ab48f2d0063e": "b4c4e60470fc2b45944565002ce71ef5",
".git/objects/d2/71e8c3924b70634792db235dfa24f914c3acf6": "ebc081ed62bda9e7df3238c1ced12389",
".git/objects/af/87cc4b7a4efc9df8d8502c815f96e92497fe65": "87e555e5ee462d920148a4b70f52a1bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9770d9c3e98d43efa9c19da177c513c5151086": "b2a063a4c9b71fc1e6d01d4582250dd6",
".git/objects/b0/0c71833938380a7477c4d77ec884b6c3597c6a": "8bd0c40b32c747dfd70764cc2abec85a",
".git/objects/a6/87d302472e8ad35c5c59536e078c16583d8d3c": "0f7622c42d017ebefab8b3d0d69871e1",
".git/objects/a6/9cb039d5db92ff1dbe5a3598be6b73abbf05f8": "ea109752e34ccafe2cb0a8d1a9e461e8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3233fa18333a1aa058b299f7d98dfafac07066": "b63cdecc8bed3f55d9fec7fe9cd90d05",
".git/objects/a1/e7ea935aa4094c9c4c41165d7509d218aaffe6": "e0eb2228e00161e62257e15de763ba77",
".git/objects/ef/468cfd50d96486b9900a0ff6f1d4375c5a53f9": "1152b8d91714c714ee5bec7d8dade85b",
".git/objects/ef/d2dd9c7fd2a1a04044fcb4f887806918a9594f": "413e3cb96276f8146863b759368b41c9",
".git/objects/c3/013ffdd92c91706352600e46b783de4ab2e295": "22e5f0fcec0a80838d3f1eb6b5178b28",
".git/objects/c3/ef8deefc28f49aecc962299b5bd94425250b5d": "3700f52a16dfa4d3f64c03fb3f76da76",
".git/objects/e1/bac51a1b86ef7116f7f6512893a642af29278e": "440817450d3888fadae4d715f93696b5",
".git/objects/e1/d20ce4045b5e5e04c21e1758f543186892db49": "76f007ad034aa32a1ed2fe423d5f8e3e",
".git/objects/cd/a5d8f49ee4b47680fbe1ba8b78fe25dd748e53": "48eed68c1c96a1bddf9f4a281b73c739",
".git/objects/cd/0f5a7114b5d6799c89f02174d5869f522a369d": "1d556969031a005f7e4198267b46ed5b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/42db83060d78e7f710ad445e042cc2b72545ed": "3fb1bdde627157b277b7cf211c619166",
".git/objects/e8/8782bf0ba9f73ed088bcab9762792081713d6c": "c670c7acf256e7dfc95df26eb986c7a9",
".git/objects/ff/e26a807e1c077a774891c65ac4a583bcb3d570": "9da82211a0d59713074acf7366321ef8",
".git/objects/c2/daa283d5a1550cb410db70f2d147d5364e6651": "ef58c79e118d66011038f0b0f195d327",
".git/objects/c2/648f26596acc87911958a4f88eee08c0c6b753": "ec470fbf8d2192cb9acf6e722ad8ce06",
".git/objects/c2/1ea373d605ab95f463c12a4b6a5251caa73b05": "871c6b58b18061ce6bcd30db869eadcd",
".git/objects/c2/4b5a046f5d68148fabd54107d4c81b7b5aca37": "0082409a92d42e74c311b46209fc5ecf",
".git/objects/c2/e164db0c883eace69be6c5a4c1e35e6aec5aad": "02d4849e5ba8cd64bb3c276cee523264",
".git/objects/f6/5ce93ade2ce44ac33ff540607186180c61dbc5": "14c3e3d16269417decdc295784fa6d98",
".git/objects/e7/c63dfd3b577984324e123dc2f688d391f553e1": "2a88d4ef092ee4cd314c47bd1fc9b5b6",
".git/objects/e7/575c0086ec229c586d94e1c75dc5ae7da54124": "dc4181567498247769d4e8d4e394d148",
".git/objects/e7/be1b0f1e26fd13e68ccdb774759bf12308e2a8": "f675fdb80ec01057d4d229a62457bbf8",
".git/objects/cb/6167dc63dd0c814ed734a85b6ea9fade73b970": "3b5ef451d86e7a71c54fa7e22ae59233",
".git/objects/f8/33f9877dc02004aaa443540226c4440db93a69": "174e718e6e3e904a02af3cde6d865eab",
".git/objects/e0/5e9e807856902594439ca1d88fe03029e91b0f": "52ee05ee8eb387dd01d9745b36e5692a",
".git/objects/46/8345f9bd1d69e9728a0e4ff7872d3266fc26dc": "a0b5c6f75c7c0523740b4a105474efa0",
".git/objects/2c/5ca0a5afa7c907efe8e6626d5be2a9528200ae": "dd44f73555abb551c153032f0b795e42",
".git/objects/79/11c5cf79677df579bb9935e769e3c165b037f8": "0b39533114b00e6a09d2fdabd0bb0427",
".git/objects/79/d1860ff8f02f6b75e913219ee52c94575c17f6": "ceacfd488804d2d5569bcb2d38335e33",
".git/objects/41/179118f9e7d362279a2c1806cbc167714977a1": "2997b072055e3b5264b8101eae6a7edf",
".git/objects/1b/f1a88feb755c13c88cca5b3508c31894a59eb8": "5064432cd021b7ae934c9688bada3ed5",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/863f4c70f7b67b8444537bb3bf8542530f98b0": "a27b8def0fdfaf4a6c152f1dd9dc780f",
".git/objects/84/88ce1f1c53f6993eb0d9aa19d8b762eaaff3bd": "b51e80a5fc63863f3d7b64ab1f631b93",
".git/objects/4a/be16e5c1fc110c4245933978c425f4a5cc0e53": "656fe8274671bbb22b369e0428fc67ea",
".git/objects/24/a3aba8f340e16459e1dd5f0114df34834b6f12": "86768619e5f6c93d1305b38b86b12f94",
".git/objects/23/387d58f30b7cd5da81fd72c61e159f590fab73": "71dce3349a9f960260b9ea434f1de4e9",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/813c4c944619a219e9e163ab72e8804bcb779c": "98e2dc841d0baf627b91fbd09d902713",
".git/objects/15/b6767e92d064f4227bbb6de6f6987d639b0d2c": "1808c44706c520935211ae639c75d2f5",
".git/objects/1d/50e2c2c02f7101b621a2076b1ef29e59015c87": "fe7c08767dc4975df63d7866f4c5e6bb",
".git/objects/1d/ee93ad25712f885b2cc319ab0ae915a21204e6": "9ef241dadbcf64f336462007097c9e2b",
".git/objects/71/7096b86e147a2237291a8fc949ad77d350d5bd": "eddcea54e1022a846f0379b839d5e5fc",
".git/objects/71/792a6754f01a2767a6e971183a8ccbb14ef2ff": "c1189ac34a811015dfa8d0ad633bc625",
".git/objects/76/de257baaa62716dfb51a72a875dcedec880f80": "1d6602bafe62f16c82fb032e60149612",
".git/objects/76/c1605ea4638cae358634347e66cc0b92e9d6df": "9b86636933d4542a8aaeb1c004b198a4",
".git/objects/82/f05cc677d852a0ed5d1bcc300b7639ec77a77e": "d55f4a652f75ff1b5e1a33a51ab3cc01",
".git/objects/82/1d20081bdefa8a985ad8d374052fe749352066": "17f15d3b9131c44b5ee007397b69447d",
".git/objects/49/26bb93387f814798dcc9583ca4fa93a321da66": "d3797fc41c6b5a96d744ed3ec5aea684",
".git/objects/40/be6df434f08cf76c552e7eeecca66bd5b73df7": "b7c411a0eb6b1eb34e5daf4056f47f57",
".git/objects/40/5541ac5102d8a9321a4a44502ef2b93972c768": "b0ce8c24f93ea75e8b3f7908839d39c9",
".git/objects/40/480abe69d811de0b46e4a9b278c3f771735d2c": "d7f709fc91ab7cac41071c8c78571cb6",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/f7e06fbdb7d8c878b78f80842b5637e1510e52": "58c272a0a6c50cdb5a81db8f8b652948",
".git/objects/47/adbb2eecb02fad36626fd2009d524a041c0bc2": "ceff8ef624103da6ba72a26f13a43653",
".git/objects/8b/bc29934de006ac23ff176e6ce1b2c3879e6a19": "3a5637bb0d0ecbf691ca67853dc6dec8",
".git/objects/13/cfb7735e1880713dc5a95feb11ebec224161db": "207d43fb1100285597e952fc4f446310",
".git/objects/13/34274b518bd591f6ac4ec2e5490e6e27cecf36": "060b7d538afa012e799c2fb5dfd9cd9c",
".git/objects/13/d389082ee67f1341ced0f90fd6c93b1bc8ab69": "ff5a2712ae3c79fd2e32b01a979c4a83",
".git/objects/7f/d9b158e3d159f2a5deb35fec57162597118440": "902e551da10739c8cdda3dd21cd23922",
".git/objects/8e/c75cb309d2dc5320b88cd29553854d06fc0e9b": "65a1e399665a70016c56b61d1502d55a",
".git/objects/25/dd9f61542e612d2d629242e051e1726d846260": "6de0df6585bc0f565ce4732532e184f5",
".git/objects/25/5f77b6777af82f203f2fcbd39e0bf06418dbbb": "0668a8c5889088ca28a328aebaca7dfe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bfceec9cfdf2cd27dd796c4535bd96fb",
".git/logs/refs/heads/main": "66ecfb879e907cb9ea3b11cbe564ab6a",
".git/logs/refs/remotes/origin/main": "494b20a97b5000ab30da3c3701418705",
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
".git/refs/heads/main": "e4d233ec48ebf357adaa82c97eb8be35",
".git/refs/remotes/origin/main": "e4d233ec48ebf357adaa82c97eb8be35",
".git/index": "d67716653159503a479990f74838b4b7",
".git/COMMIT_EDITMSG": "d91f30fc03491b7a9b2d4573d3036d66",
"assets/AssetManifest.json": "77ae1c3ba2ae145f9267f0094b6d441d",
"assets/NOTICES": "b6e41d02eece0c004e2e49f6fe6ce717",
"assets/FontManifest.json": "4d1a671b2521637914f2d42358fdee34",
"assets/AssetManifest.bin.json": "e2ce459387140042963ef57ac05d624c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/add_to_google_wallet/assets/svg/buttons/br_add_to_google_wallet_wallet-button.svg": "d711b404a7d3b86f3cc5c8acedc50dbd",
"assets/packages/add_to_google_wallet/assets/svg/buttons/es419_add_to_google_wallet_wallet-button.svg": "cb9db60b0742150ae3ab547e4f4ef0e6",
"assets/packages/add_to_google_wallet/assets/svg/buttons/se_add_to_google_wallet_wallet-button.svg": "4f87e7ee56c9aeddf475f1a4c6abd375",
"assets/packages/add_to_google_wallet/assets/svg/buttons/pt_add_to_google_wallet_wallet-button.svg": "d711b404a7d3b86f3cc5c8acedc50dbd",
"assets/packages/add_to_google_wallet/assets/svg/buttons/lt_add_to_google_wallet_wallet-button.svg": "cb8ba3e609a1b57f225f05eaddcb8e19",
"assets/packages/add_to_google_wallet/assets/svg/buttons/sq_add_to_google_wallet_wallet-button.svg": "e568f2f0545c2993b412f7f5b42320ec",
"assets/packages/add_to_google_wallet/assets/svg/buttons/vi_add_to_google_wallet_wallet-button.svg": "35162663f63d206ae1e2cc30be7cfffc",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ar_add_to_google_wallet_wallet-button.svg": "8ed2b5dc8ea42390bc1f22f9814954b0",
"assets/packages/add_to_google_wallet/assets/svg/buttons/sr_add_to_google_wallet_wallet-button.svg": "fda80812ddb5b99cf767ed19a6ceefea",
"assets/packages/add_to_google_wallet/assets/svg/buttons/fl_add_to_google_wallet_wallet-button.svg": "d5141c1d2fa7c71f6d3f8024e60980a4",
"assets/packages/add_to_google_wallet/assets/svg/buttons/it_add_to_google_wallet_wallet-button.svg": "fbdc320908b10990db14acc6f433ac7c",
"assets/packages/add_to_google_wallet/assets/svg/buttons/frFR_add_to_google_wallet_wallet-button.svg": "bc2f47f5f3b8f8f3253770fc89a540c7",
"assets/packages/add_to_google_wallet/assets/svg/buttons/de_add_to_google_wallet_wallet-button.svg": "bfb158c4b084482543e8ef901df02d21",
"assets/packages/add_to_google_wallet/assets/svg/buttons/pl_add_to_google_wallet_wallet-button.svg": "72e75b2a37a77648f882878b4512952b",
"assets/packages/add_to_google_wallet/assets/svg/buttons/zhTW_add_to_google_wallet_wallet-button.svg": "147b0913cc5f029978e33006dcbdee13",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ro_add_to_google_wallet_wallet-button.svg": "406323ed5b974f0f67fa516f7653bde0",
"assets/packages/add_to_google_wallet/assets/svg/buttons/no_add_to_google_wallet_wallet-button.svg": "87eac0605cbb7056f2e32e270da14d07",
"assets/packages/add_to_google_wallet/assets/svg/buttons/sl_add_to_google_wallet_wallet-button.svg": "f89a88aa0b6dfb367c74c621bda15ffd",
"assets/packages/add_to_google_wallet/assets/svg/buttons/hr_add_to_google_wallet_wallet-button.svg": "b6d10a9fbd63b345fc2825b1e4a3abf0",
"assets/packages/add_to_google_wallet/assets/svg/buttons/tr_add_to_google_wallet_wallet-button.svg": "f1b61f991a8ab72fe7833d054aab7e97",
"assets/packages/add_to_google_wallet/assets/svg/buttons/gr_add_to_google_wallet_wallet-button.svg": "64c855f01d129b8d71ceeea8ed2a3d71",
"assets/packages/add_to_google_wallet/assets/svg/buttons/he_add_to_google_wallet_wallet-button.svg": "a9a052a290a19f712a6685bbcd190ca0",
"assets/packages/add_to_google_wallet/assets/svg/buttons/nl_add_to_google_wallet_wallet-button.svg": "efaee620d9c06b1fd5181f2b2395a3d1",
"assets/packages/add_to_google_wallet/assets/svg/buttons/et_add_to_google_wallet_wallet-button.svg": "c0b6fbcba5ea9e222d49da62d55c1f07",
"assets/packages/add_to_google_wallet/assets/svg/buttons/az_add_to_google_wallet_wallet-button.svg": "1c545af772b2f9b1e50b23b63c9f98da",
"assets/packages/add_to_google_wallet/assets/svg/buttons/is_add_to_google_wallet_wallet-button.svg": "cb03001a5ab3d58ebbfa3d6472aa4a23",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ka_add_to_google_wallet_wallet-button.svg": "be97561ee61811a8ac3dc8128b5301e8",
"assets/packages/add_to_google_wallet/assets/svg/buttons/esUS_add_to_google_wallet_wallet-button.svg": "cb9db60b0742150ae3ab547e4f4ef0e6",
"assets/packages/add_to_google_wallet/assets/svg/buttons/fp_add_to_google_wallet_wallet-button.svg": "23b16942ca07f225da0d4ff044825213",
"assets/packages/add_to_google_wallet/assets/svg/buttons/id_add_to_google_wallet_wallet-button.svg": "7139c1614230fce1ea41c7f9cadda52f",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enCA_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/mk_add_to_google_wallet_wallet-button.svg": "ec59cda1b4b0569349d5b04b5fecb177",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enSG_add_to_google_wallet_wallet-button.svg": "568708442552f3b3caaf6161f4868d72",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enIN_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enAU_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/my_add_to_google_wallet_wallet-button.svg": "04157e592054aabc39fd2215792baaea",
"assets/packages/add_to_google_wallet/assets/svg/buttons/sk_add_to_google_wallet_wallet-button.svg": "b16f6ed9494595a14ade427d4db1b0b1",
"assets/packages/add_to_google_wallet/assets/svg/buttons/hu_add_to_google_wallet_wallet-button.svg": "e534db0e513768092bc4c2b6b4e3beea",
"assets/packages/add_to_google_wallet/assets/svg/buttons/by_add_to_google_wallet_wallet-button.svg": "fc717a3f3da30fe862a310d643fe92ad",
"assets/packages/add_to_google_wallet/assets/svg/buttons/jp_add_to_google_wallet_wallet-button.svg": "d139a2176756c1b0ccf9c033450d4473",
"assets/packages/add_to_google_wallet/assets/svg/buttons/esES_add_to_google_wallet_wallet-button.svg": "5946c137c2cb5015d3bb2d2b89bbfa2f",
"assets/packages/add_to_google_wallet/assets/svg/buttons/cz_add_to_google_wallet_wallet-button.svg": "f3f2178af2bc4cdf103826cd98c9369b",
"assets/packages/add_to_google_wallet/assets/svg/buttons/dk_add_to_google_wallet_wallet-button.svg": "60d5092f469e20135016aaf3cc5d213b",
"assets/packages/add_to_google_wallet/assets/svg/buttons/hy_add_to_google_wallet_wallet-button.svg": "86474c2f3e14d467e45a8b9c2b81402b",
"assets/packages/add_to_google_wallet/assets/svg/buttons/uz_add_to_google_wallet_wallet-button.svg": "9426afa0cd9540106ef93fd46a1fd217",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ca_add_to_google_wallet_wallet-button.svg": "0a4925620a47363661cb7a51b4ab5a58",
"assets/packages/add_to_google_wallet/assets/svg/buttons/lv_add_to_google_wallet_wallet-button.svg": "943d879ec5f1533769d3bc60e849d213",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enUS_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/kk_add_to_google_wallet_wallet-button.svg": "cecbc3f3d7973d388b088294b1ea265a",
"assets/packages/add_to_google_wallet/assets/svg/buttons/uk_add_to_google_wallet_wallet-button.svg": "6835dbf7541d926e3d9367fd67c703d4",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ky_add_to_google_wallet_wallet-button.svg": "157b7963b74a17c4bfd5de0db482b399",
"assets/packages/add_to_google_wallet/assets/svg/buttons/bs_add_to_google_wallet_wallet-button.svg": "6aa017fb69dfc3cf76058285e1d630d8",
"assets/packages/add_to_google_wallet/assets/svg/buttons/th_add_to_google_wallet_wallet-button.svg": "ab9c343ba68db03201e572a234cb5412",
"assets/packages/add_to_google_wallet/assets/svg/buttons/zhHK_add_to_google_wallet_wallet-button.svg": "147b0913cc5f029978e33006dcbdee13",
"assets/packages/add_to_google_wallet/assets/svg/buttons/bg_add_to_google_wallet_wallet-button.svg": "fb36a9dd4688eabe5e9e50b029564227",
"assets/packages/add_to_google_wallet/assets/svg/buttons/frCA_add_to_google_wallet_wallet-button.svg": "bc2f47f5f3b8f8f3253770fc89a540c7",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ru_add_to_google_wallet_wallet-button.svg": "fc717a3f3da30fe862a310d643fe92ad",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enGB_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enZA_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "e5be3918238ed01cc35ac328534db134",
"assets/fonts/MaterialIcons-Regular.otf": "e3b925dd01609cb3a2d54b2519662dc4",
"assets/assets/music/FanQuan-Deleted.wav": "2a6b4736594c9f8cc0b3e230c77d7d06",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/sprites/end_bg.png": "c8936fe754ba3efc5b37e886972729c0",
"assets/assets/images/sprites/customer_sprite.png": "46934cc2f9e90108f0a370f653c82c9a",
"assets/assets/images/sprites/vf7_sprite.png": "19943d5e06b991ad7e72e87614e940ca",
"assets/assets/images/sprites/end_old_bg.png": "c3a1ebcae4e0e0c9ddbaaf5ada0617cd",
"assets/assets/images/sprites/factory_sprite.png": "68b5b4a0931c0a2e6901a865d4cc6303",
"assets/assets/images/sprites/T_sprite.png": "c4b7e0a9820fd100fc6eb5f407923f29",
"assets/assets/images/sprites/service_sprite.png": "488e4f8deb9423cfd92bf18e485a4db7",
"assets/assets/images/sprites/vbus_sprite.png": "9a7ee371802142d10e23bf18ade3c526",
"assets/assets/images/sprites/turbine_sprite.png": "4d96d4a2b7077fecbe24c7a235c99bc0",
"assets/assets/images/sprites/S_sprite.png": "6e37fae7e21dda5ab17a5d421cb8c9d3",
"assets/assets/images/sprites/house_sprite.png": "a3513529ba982a1e01088b55d2026e42",
"assets/assets/images/sprites/vf8_sprite.png": "13fcc91f300019bbd0d543e096fb7142",
"assets/assets/images/sprites/waste_sprite.png": "5ba70d18cd06dcaf590196c3eadce6ea",
"assets/assets/images/sprites/tree_sprite.png": "1466fdf0436f9489ecaaa677cd4d1bf0",
"assets/assets/images/sprites/busstop_sprite.png": "f136e1fd0ac0bd3871287686b15c5705",
"assets/assets/images/sprites/police_sprite.png": "69a245e41f5a3611fe563e7e086eafc9",
"assets/assets/images/sprites/background.png": "6a82eead5b7512f6e48dee822c739e16",
"assets/assets/images/sprites/solar_sprite.png": "fd1d84cb6c52995510c5b2a60b96202b",
"assets/assets/images/sprites/start_bg.png": "c8936fe754ba3efc5b37e886972729c0",
"assets/assets/images/sprites/recycling_sprite.png": "dd919bdab77e12c6fce87efb9f5a3fab",
"assets/assets/images/sprites/logo.png": "be240fbd98116a1c7784813655d7e9bc",
"assets/assets/images/sprites/vfe34_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
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
"assets/assets/images/sprites/I_sprite.png": "632270f290ff65432d4f589686f2986d",
"assets/assets/images/sprites/leaf_sprite.png": "ac4dd2ad6b0b99bf847519762968d546",
"assets/assets/images/sprites/L_sprite.png": "fcdf41cf72c2aa30d788894df18872fb",
"assets/assets/images/sprites/vf9_sprite.png": "138c58e2ea3c0f5989ffb15982f071c2",
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
"assets/assets/fonts/Square/Square.ttf": "faeafbf22a63186130a86a45be8746d4",
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

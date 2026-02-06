import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1faee] to-[#a8dadc] dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#1d3557]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              关于海魂硬糕
            </h1>
            <p className="text-lg md:text-xl text-[#a8dadc] mb-10 max-w-2xl mx-auto">
              传承百年的舟山传统美食，源自岱山长涂岛的特色糕点
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e63946] dark:text-white mb-12 text-center">
              历史传承
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20pastry%20shop%20exterior%20with%20wooden%20signage%20and%20red%20lanterns&image_size=landscape_16_9" 
                  alt="海魂硬糕店铺外观" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1d3557] dark:text-white mb-4">
                  百年传承
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  海魂硬糕始创于1885年，至今已有近140年的历史。它起源于岱山县长涂岛，是舟山群岛传统糕点的代表之一。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  硬糕以其独特的制作工艺和口感闻名，选用优质糯米、芝麻、白糖等原料，经过多道工序精心制作而成。
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  如今，海魂硬糕已成为浙江老字号，非物质文化遗产，深受当地居民和游客的喜爱。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-16 bg-[#f1faee] dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e63946] dark:text-white mb-12 text-center">
              制作工艺
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-[#1d3557] dark:text-white mb-4">
                  传统工艺
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  海魂硬糕的制作过程非常讲究，从原料选择到成品包装，每一步都严格按照传统工艺执行。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  首先将糯米浸泡、蒸煮，然后加入芝麻、白糖等配料，搅拌均匀后压制成型，最后经过烘焙而成。
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  这种传统工艺保证了硬糕的口感酥脆，甜而不腻，且易于保存，是海岛居民出海捕鱼时的理想食品。
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20pastry%20making%20process%20with%20wooden%20molds%20and%20steamers&image_size=landscape_16_9" 
                  alt="海魂硬糕制作工艺" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e63946] dark:text-white mb-12 text-center">
              产品特色
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="bg-[#f1faee] dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="w-16 h-16 bg-[#e63946] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🍯</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d3557] dark:text-white mb-2">
                  传统原味
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  经典口味，选用优质糯米和芝麻，口感酥脆，甜而不腻，是最受欢迎的传统品种。
                </p>
              </div>
              
              {/* Product 2 */}
              <div className="bg-[#f1faee] dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="w-16 h-16 bg-[#457b9d] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🥜</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d3557] dark:text-white mb-2">
                  花生味
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  添加精选花生，增加了硬糕的香气和口感层次，深受花生爱好者的喜爱。
                </p>
              </div>
              
              {/* Product 3 */}
              <div className="bg-[#f1faee] dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="w-16 h-16 bg-[#1d3557] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🍵</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d3557] dark:text-white mb-2">
                  绿茶味
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  融入优质绿茶粉，口感清新，带有淡淡的茶香，是现代改良的创新品种。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-[#1d3557]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              荣誉资质
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-[#1d3557] mb-2">浙江老字号</h3>
                <p className="text-sm text-gray-600">浙江省商务厅授予</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-[#1d3557] mb-2">非物质文化遗产</h3>
                <p className="text-sm text-gray-600">舟山市人民政府授予</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-[#1d3557] mb-2">工业旅游示范基地</h3>
                <p className="text-sm text-gray-600">浙江省旅游局授予</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-[#1d3557] mb-2">农家特色小吃百强</h3>
                <p className="text-sm text-gray-600">浙江省农业厅授予</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#e63946] dark:text-white mb-6">
              联系我们
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              如果您对海魂硬糕有任何疑问或合作意向，欢迎随时联系我们
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#f1faee] dark:bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-[#1d3557] dark:text-white mb-2">地址</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  浙江省舟山市岱山县长涂岛
                </p>
              </div>
              <div className="bg-[#f1faee] dark:bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-[#1d3557] dark:text-white mb-2">电话</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  13115805828
                </p>
              </div>
              <div className="bg-[#f1faee] dark:bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-[#1d3557] dark:text-white mb-2">邮箱</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  271042082@qq.com
                </p>
              </div>
            </div>
            <Button size="lg" className="px-8 py-6 bg-[#e63946] hover:bg-[#c1121f]">
              联系我们
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

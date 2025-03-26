(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234],{1556:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>o});var t=s(5155),d=s(3854),a=s(5695),c=s(2177);function o(){let{addProduct:e}=(0,d.K)(),r=(0,a.useRouter)(),{register:s,handleSubmit:o,formState:{errors:i}}=(0,c.mN)();return(0,t.jsxs)("div",{className:"container mx-auto p-4",children:[(0,t.jsx)("h1",{className:"text-2xl mb-4",children:"Создать продукт"}),(0,t.jsxs)("form",{onSubmit:o(s=>{e(s),r.push("/products")}),className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{...s("title",{required:"Название обязательно"}),placeholder:"Название",className:"w-full p-2 border border-solid border-black"}),i.title&&(0,t.jsx)("p",{className:"text-red-500",children:i.title.message})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("textarea",{...s("description",{required:"Описание обязательно"}),placeholder:"Описание",className:"w-full p-2 border border-solid border-black"}),i.description&&(0,t.jsx)("p",{className:"text-red-500",children:i.description.message})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{...s("image",{required:"Ссылка на картинку обязательна"}),placeholder:"URL картинки",className:"w-full p-2 border border-solid border-black"}),i.image&&(0,t.jsx)("p",{className:"text-red-500",children:i.image.message})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"number",...s("price",{required:"Цена обязательна",min:0}),placeholder:"Цена",className:"w-full p-2 border border-solid border-black"}),i.price&&(0,t.jsx)("p",{className:"text-red-500",children:i.price.message})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{...s("category",{required:"Категория обязательна"}),placeholder:"Категория (например, electronics)",className:"w-full p-2 border border-solid border-black"}),i.category&&(0,t.jsx)("p",{className:"text-red-500",children:i.category.message})]}),(0,t.jsx)("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded",children:"Создать"})]})]})}},3854:(e,r,s)=>{"use strict";s.d(r,{K:()=>a});var t=s(5453),d=s(6786);let a=(0,t.v)()((0,d.Zr)((e,r)=>({products:[],currentPage:1,itemsPerPage:6,fetchProducts:async()=>{if(0===r().products.length){console.log("Загружаем продукты с Fake Store API, так как store пуст");let r=await fetch("https://fakestoreapi.com/products");if(!r.ok)throw Error("Failed to fetch products from Fake Store API");e({products:(await r.json()).map(e=>({...e,isLiked:!1}))})}},toggleLike:r=>e(e=>({products:e.products.map(e=>e.id===r?{...e,isLiked:!e.isLiked}:e)})),deleteProduct:r=>e(e=>({products:e.products.filter(e=>e.id!==r)})),addProduct:r=>e(e=>{let s={...r,id:Date.now(),isLiked:!1};return{products:[...e.products,s]}}),editProduct:r=>e(e=>({products:e.products.map(e=>e.id===r.id?{...e,...r}:e)})),setPage:r=>e(()=>({currentPage:r}))}),{name:"product-store",storage:(0,d.KU)(()=>localStorage),partialize:e=>({products:e.products,currentPage:e.currentPage,itemsPerPage:e.itemsPerPage})}))},5062:(e,r,s)=>{Promise.resolve().then(s.bind(s,1556))},5695:(e,r,s)=>{"use strict";var t=s(8999);s.o(t,"useRouter")&&s.d(r,{useRouter:function(){return t.useRouter}}),s.o(t,"useSearchParams")&&s.d(r,{useSearchParams:function(){return t.useSearchParams}})}},e=>{var r=r=>e(e.s=r);e.O(0,[354,441,684,358],()=>r(5062)),_N_E=e.O()}]);
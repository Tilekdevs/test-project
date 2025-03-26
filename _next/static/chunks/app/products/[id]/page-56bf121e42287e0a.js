(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{2309:(e,r,t)=>{"use strict";t.d(r,{default:()=>c});var s=t(5155),i=t(3854),a=t(2177);function c(e){let{product:r}=e,{register:t,handleSubmit:c,formState:{errors:d}}=(0,a.mN)({defaultValues:{title:r.title,description:r.description,image:r.image,price:r.price,category:r.category}}),l=(0,i.K)(e=>e.editProduct);return(0,s.jsxs)("div",{className:"container mx-auto p-4",children:[(0,s.jsx)("h1",{className:"text-2xl mb-4",children:"Редактировать продукт"}),(0,s.jsxs)("form",{onSubmit:c(e=>{l({...r,...e}),window.location.href="/products/".concat(r.id)}),className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{...t("title",{required:"Название обязательно"}),placeholder:"Название",className:"w-full p-2 border border-solid border-black"}),d.title&&(0,s.jsx)("p",{className:"text-red-500",children:d.title.message})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("textarea",{...t("description",{required:"Описание обязательно"}),placeholder:"Описание",className:"w-full p-2 border border-solid border-black"}),d.description&&(0,s.jsx)("p",{className:"text-red-500",children:d.description.message})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{...t("image",{required:"Ссылка на картинку обязательна"}),placeholder:"URL картинки",className:"w-full p-2 border border-solid border-black"}),d.image&&(0,s.jsx)("p",{className:"text-red-500",children:d.image.message})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{type:"number",...t("price",{required:"Цена обязательна",min:0}),placeholder:"Цена",className:"w-full p-2 border border-solid border-black"}),d.price&&(0,s.jsx)("p",{className:"text-red-500",children:d.price.message})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{...t("category",{required:"Категория обязательна"}),placeholder:"Категория (например, electronics)",className:"w-full p-2 border border-solid border-black"}),d.category&&(0,s.jsx)("p",{className:"text-red-500",children:d.category.message})]}),(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded",children:"Сохранить"})]})]})}},3854:(e,r,t)=>{"use strict";t.d(r,{K:()=>a});var s=t(5453),i=t(6786);let a=(0,s.v)()((0,i.Zr)((e,r)=>({products:[],currentPage:1,itemsPerPage:6,fetchProducts:async()=>{if(0===r().products.length){console.log("Загружаем продукты с Fake Store API, так как store пуст");let r=await fetch("https://fakestoreapi.com/products");if(!r.ok)throw Error("Failed to fetch products from Fake Store API");e({products:(await r.json()).map(e=>({...e,isLiked:!1}))})}},toggleLike:r=>e(e=>({products:e.products.map(e=>e.id===r?{...e,isLiked:!e.isLiked}:e)})),deleteProduct:r=>e(e=>({products:e.products.filter(e=>e.id!==r)})),addProduct:r=>e(e=>{let t={...r,id:Date.now(),isLiked:!1};return{products:[...e.products,t]}}),editProduct:r=>e(e=>({products:e.products.map(e=>e.id===r.id?{...e,...r}:e)})),setPage:r=>e(()=>({currentPage:r}))}),{name:"product-store",storage:(0,i.KU)(()=>localStorage),partialize:e=>({products:e.products,currentPage:e.currentPage,itemsPerPage:e.itemsPerPage})}))},4521:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});var s=t(5155),i=t(3854),a=t(6766),c=t(6874),d=t.n(c),l=t(5695),o=t(2309),u=t(2115);function n(e){let{product:r}=e,t="true"===(0,l.useSearchParams)().get("edit"),{products:c,fetchProducts:n}=(0,i.K)(),[p,m]=(0,u.useState)(!0),[h]=(0,u.useState)(null),x=c.find(e=>e.id===r.id)||r;return((0,u.useEffect)(()=>{(async()=>{m(!0),await n(),m(!1)})()},[n]),p)?(0,s.jsx)("div",{children:"Загрузка..."}):h?(0,s.jsx)("div",{className:"container mx-auto p-4",children:h}):(0,s.jsx)("div",{className:"container mx-auto p-4",children:t?(0,s.jsx)(o.default,{product:x}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d(),{href:"/products",className:"text-blue-500 mb-4 inline-block",children:"Назад к списку"}),(0,s.jsx)(a.default,{src:x.image,alt:x.title,className:"h-64 object-contain",width:256,height:256}),(0,s.jsx)("h1",{className:"text-2xl mb-4",children:x.title}),(0,s.jsx)("p",{children:x.description}),(0,s.jsxs)("p",{children:["Price: ",x.price,"$"]}),(0,s.jsxs)("p",{children:["Category: ",x.category]}),(0,s.jsx)(d(),{href:"/edit-product/".concat(x.id,"?edit=true"),className:"mt-4 inline-block bg-blue-500 text-white p-2 rounded",children:"Редактировать"})]})})}},5545:(e,r,t)=>{Promise.resolve().then(t.bind(t,4521))},5695:(e,r,t)=>{"use strict";var s=t(8999);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}})}},e=>{var r=r=>e(e.s=r);e.O(0,[354,874,766,441,684,358],()=>r(5545)),_N_E=e.O()}]);
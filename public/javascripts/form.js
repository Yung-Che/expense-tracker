// 包住下拉式選單的form
const categoryForm = document.querySelector('#categoryForm')
// 下拉式選單
const categoryList = document.querySelector('#categoryId')
// when category select element is changed, then submit categoryForm
function onCategoryListChanged(event) {
  categoryForm.submit()
}

categoryList.addEventListener('change', onCategoryListChanged) 

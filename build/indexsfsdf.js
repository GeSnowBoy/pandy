var list = [];

$('.list-header-hots a').each(function() {
  list.push({
    title: $(this).attr('title'),
    cate: $(this).attr('data-cate')
  });
});
console.info(JSON.stringify(list));

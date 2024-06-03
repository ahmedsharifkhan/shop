<script>
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'productView',
  'productName': '{{ page.name | escape }}',
  'productDescription': '{{ page.description_markdown | escape }}',
  'productPrice': '{{ page.price }}',
  'productSku': '{{ page.sku }}',
  'productStock': '{{ page.stock }}',
  'productSizes': {{ page.sizes | jsonify }},
  'productStyles': {{ page.styles | jsonify }}
});
</script>

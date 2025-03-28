import 'dart:convert';
import 'package:http/http.dart' as http;

void main() async {
  // GET Products
  var response = await http.get(Uri.parse('http://localhost:3000/products'));
  print("Products: ${response.body}");

  // POST a new product
  var newProduct = {"id": 2, "name": "Phone", "price": 800};
  var postResponse = await http.post(
    Uri.parse('http://localhost:3000/products'),
    headers: {"Content-Type": "application/json"},
    body: jsonEncode(newProduct),
  );
  print("Add Product Response: ${postResponse.body}");

  // GET Orders
  var ordersResponse =
      await http.get(Uri.parse('http://localhost:3000/orders'));
  print("Orders: ${ordersResponse.body}");

  // POST a new order
  var newOrder = {"id": 2, "product_id": 2, "quantity": 1};
  var orderResponse = await http.post(
    Uri.parse('http://localhost:3000/orders'),
    headers: {"Content-Type": "application/json"},
    body: jsonEncode(newOrder),
  );
  print("Add Order Response: ${orderResponse.body}");
}

-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
Select ProductName, CategoryName From Product
Join Category on CategoryId = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
Select Id, CompanyName From [Order]
Join Shipper on ShipVia = Shipper.Id
where OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select ProductName, ProductId, Quantity From [Order]
Join OrderDetail on [Order].Id = OrderDetail.OrderId
Join Product on OrderDetail.ProductId = Product.Id
Where [Order].Id = 10251
Order by Product.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

Select Id as OrderID, CompanyName, LastName From [Order]
Join Employee on [Order].EmployeeID = Employee.Id
Join Customer on [Order].CustomerId = Customer.Id
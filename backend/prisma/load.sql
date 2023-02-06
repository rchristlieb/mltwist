insert into properties
(
    "id",
    "name",
    "desc",
    "checkIn",
    "checkOut",
    "url",
    "price",
    "guests",
    "bedrooms",
    "beds",
    "bathrooms"
)
values
(1, "Wonderful House", "Wonderful View", "2023-02-12", "2023-02-28", "/images/property_photo1.jpg", 375.00, 4, 2, 2, 2);
insert into properties
(
    "id",
    "name",
    "desc",
    "checkIn",
    "checkOut",
    "url",
    "price",
    "guests",
    "bedrooms",
    "beds",
    "bathrooms"
)
values
(2, "Luxury House", "Luxurious interior", "2023-02-19", "2023-02-25", "/images/property_photo2.jpg", 595.00, 6, 4, 4, 3);
insert into properties
(
    "id",
    "name",
    "desc",
    "checkIn",
    "checkOut",
    "url",
    "price",
    "guests",
    "bedrooms",
    "beds",
    "bathrooms"
)
values
(3, "Beautiful House", "Great Neighborhood", "2023-03-05", "2023-03-11", "/images/property_photo3.jpg", 300.00, 4, 3, 3, 2);
insert into properties
(
    "id",
    "name",
    "desc",
    "checkIn",
    "checkOut",
    "url",
    "price",
    "guests",
    "bedrooms",
    "beds",
    "bathrooms"
)
values
(4, "Vacation House", "Great View", "2023-03-05", "2023-03-11", "/images/property_photo4.jpg", 210.00, 5, 3, 3, 2);

insert into hosts
(
    "id",
    "name",
    "desc",
    "url"
)
values
(1, "Veronica Wells", "Dedicated Homeowner", "/images/host_photo1.webp");
insert into hosts
(
    "id",
    "name",
    "desc",
    "url"
)
values
(2, "Samuel Jackson", "Tough Guy", "/images/host_photo2.webp");
insert into hosts
(
    "id",
    "name",
    "desc",
    "url"
)
values
(3, "William Shatner", "Famous Actor", "/images/host_photo3.webp");

insert into hosts
(
    "id",
    "name",
    "desc",
    "url"
)
values
(4, "Mick Jagger", "Rock and Roll", "/images/host_photo4.webp");

insert into host_properties
(
    id,
    "hostId",
    "propertyId"
)
values
(1, 1, 1);

insert into host_properties
(
    id,
    "hostId",
    "propertyId"
)
values
(2, 2, 2);

insert into host_properties
(
    id,
    "hostId",
    "propertyId"
)
values
(3, 3, 3);

insert into host_properties
(
    id,
    "hostId",
    "propertyId"
)
values
(4, 4, 4);

insert into host_properties
(
    id,
    "hostId",
    "propertyId"
)
values
(5, 1, 2);

insert into host_properties
(
    id,
    "hostId",
    "propertyId"
)
values
(6, 3, 2);
insert into host_properties
(
    id,
    "hostId",
    "propertyId"
)
values
(7, 4, 2);
export const defaultCatImg =
  "https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg";
export const mockCatFactory = (name, age, breed, imageUrl) => ({
  id: Date.now(),
  name: name,
  age: age,
  breed: breed,
  imageUrl: imageUrl || defaultCatImg,
});
export const catData = [
  mockCatFactory("lanita", 1, "angora"),
  mockCatFactory("esponjoso", 7, "calico"),
  mockCatFactory("serafina", 10, "micha"),
];

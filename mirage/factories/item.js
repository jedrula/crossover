/*
 This is an example factory definition.

 Create more files in this directory to define additional factories.
 */
import Mirage, {faker}  from 'ember-cli-mirage';

function percantage() {
   return faker.random.number({
      min: 0,
      max: 100
   })
}

function testData() {
   let allTests = faker.random.number({
      min: 5,
      max: 4000
   });

   let failedTests = faker.random.number({
      min: Number.parseInt(allTests / 6),
      max: allTests
   });

   return{
      allTests: allTests,
      failedTests: failedTests,
      codeCovarage: percantage()
   }
}

export default Mirage.Factory.extend({
   buildNo() {
      return faker.random.number({
         min: 100000,
         max: 999999
      })
   },
   owner: faker.name.firstName,       // using faker
   timeStarted: faker.date.past,
   state(/* i */) {
      return faker.random.arrayElement(["running","rejected","accepted"]);//TODO maybe just add first element of fake data as running - old running jobs make little sense
   },
   metrics() {
      return {
         test: {
            val: percantage(),
            alert: faker.random.boolean()
         },
         maintainability: {
            val: percantage(),
            alert: faker.random.boolean()
         },
         security: {
            val: percantage(),
            alert: faker.random.boolean()
         },
         workmanship: {
            val: percantage(),
            alert: faker.random.boolean()
         }
      }
   },
   build() {
      return{
         date: faker.date.past(),
         alert: faker.random.boolean()
      }
   },
   unitTest: testData,
   functionalTest: testData
  }
);

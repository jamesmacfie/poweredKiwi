# ElectricKiwi summary scraper

A teeny wee script that goes and grabs the summary data from your Electric Kiwi account.

Uses [Nightmare](https://github.com/segmentio/nightmare) as the headless browser runner.

## To run

`npm install` to get all dependencies.

You'll need to create a `secrets.json` file with your username and password in it (this is not committed into git, BTW). You can rename `secrets.example.json` to `secrets.json` and go from there.

`node .` will run it. You will need Node 7 or above to support `async/await`.

## What info this gets

It will print a JSON object that looks like this:

```
{
  dateRange: 'Jan 13th to Jan 13th, 2019',
  electricityTotal: '$6.10',
  electricityUsage: '$0.2979/kWh',
  hopUsage: '1.51 kWh',
  supplyCharges: '1 days',
  supplyChargesRate: '$1.0000/day',
  supplyChargesTotal: '$1.00',
  total: '$7.10'
}
```

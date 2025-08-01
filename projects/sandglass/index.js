const { sumTokens2, } = require('../helper/solana')

const tokensAndOwners = {
  eclipse: [
    ["A8uPGauLyDTw9dMjBpb9Vrgq7frbWX46XqX71paW4pri", "GGgv3ixpQjpuHL7GeLedEHHVSq6BMKmRk5RckTwvmgka"]
  ],
  solana: [
    ["EAsRTTRK2wjte4DecPYUjieTkakqFEYe9WD8z2mqvwS8", "GeXibGhHiCPvtJKCGEKWHnHvGnk1tT3VfzYz8s5G3v4y"],
    ["2Pepgww4TndN5QsvodbyjVCjUEcmPnxzq5dqsbmdtQdT", "uy1xw2f23GipDh3aL8rVWmtPLbaetwiS1uzm9RAUeTy"],
    ["89dkr9ZhU3TGNzMKF7WbbuNBaqaGEgjtWsE33Vi3RBxY", "CwaUu6mzhTtv8T3777akAQEw57eCrHWcFShsKHq4xUod"],
    ["AM8LKTfzZ5KUxviB7faYh5kFdnJhWgGVoRrZpfmi37ms", "DTf16ohumTwptoevUGuo5qZvsgibrgnefb6inBZdqDLo"],
    ["FMDHLQDh9gWnnZQN9CYNViau7D9M4ggpFMqk8uybPttc", "6975bo5KMwc7iHJy6yfnxL4HYo9SVSudTAPNM23pnPGA"],
    ["5cPbK3BdrUVMUoe2wXppLH32tu5WFzW4cxjfLKsrF3yx", "gcsAMVGbQEwXB3a6Y1gProbV6hqnMr3t6Q9Z4PVUQfY"],
    ["3Kwsdqgxp5c6yQQLVU3L6LC9LWThwvPr1urwc9UhqH2P", "DL5iykebZDbQhiCXHcsbyPaqeWAZLQQENCZsrpMYTt8c"],
    ["4LJni8SefGqyHWEdk2W8uLWaVL5uA8pfE6MkYvmMmTfF", "JosCLY7dMXJFxjwj1sGArmDSKosAVzhKDHmwdsZBe2K"],
    ["5386v6tbgEMrA5sX5sLGYTEAjpZ5fsMaLDkBbxawnnqD", "A1CfHVTRh8SqGmtUSTzUrXKzJaAroaRxs5sa5pdY4Gdw"],
    ["D637bg2p2UqPrh3gsm9r2RrBnFezeUt5qspQuJyrBFaN", "FKXrRSwG2ugEt1waao9P6UbnCZyNiBwHDj8m4nLfdteq"],
    ["FVfGSJ6VGwpbfUEjpMs6rHE8mXaLrUi5ByPR66MsQqKs", "Cz45WXUuz4xs2dGXcqDafFUEkddMs9TspLTYbaxauYzw"],
    ["9RSDq7sd7VZygdDAH4rRuL5dWWatJEMPe5pbwGSKKhr8", "9tamB4Lu4VicC7zcPcyNwDtQJRnx1rvgXxgzkzEr5mL1"],
    ["B9XrZdPhbPi5FZXgpReHzDY5bkF18aRxtkgXzDmZz8uw", "6FtYGDfxQwrh2sHNGkTsirKx5vjxSeD8inwTDtPcipEd"],
    ["EETKGUFiM5ihrtz4cCXZngMTyMxrk8WanUemDHX4BfVD", "7BRGGfv2dRDRVkUAo8y3M2nLvwRwvVEtx3siikooRDVw"],
    ["9Mbo33isosQXQAg2VNTD4pobCDHtmFAkMwuUo3Vb11fh", "3XGavdreqzWoa5kw3tUT7UpPmF3yACsF5GeyTtzzxJ8v"],
    ["52EBWh8t1yHK5AA7RsKVaCU44YpgGsatbDSNPSbBpWUr", "DQckbqNQBsF2BusNYwFpb4BFoPJC7VeAmM4ZudHAwebn"],
    ["7sxrDsyfuEryDsHurLi4Fkd8RitkmbojQZFELfR1QcKQ", "H55YhH1arcF2pBPmuKbVdTvRVXUyD4L3jzjY2n1Nt7Lp"],
    ["6SK4WhZTD3fwpkYzE4oaGyqfPU9367MCWPYeNBLrrt1S", "x4bUfTYz26hyJNSZEB3AHSw2FT8vtjvo6hLBaXvFgYn"],
    ["EbSf4fhDBDw137wLxfjAitf4p6M43VmkpFk6AZGMJo5M", "2CipgvXpArFUgCNZu5fruLDBETkEHP55HhtJkxfHcRz9"]
  ]
}

async function tvl(api) {
  return sumTokens2({ tokensAndOwners: tokensAndOwners[api.chain], api, })
}

module.exports = {
  timetravel: false,
  solana: { tvl, },
  eclipse: { tvl, },
}

# ton-minter
this minter only works with disintar made collections
## setup
1) download and install node
2) open a terminal in the folder where the files `index.js`, `tonweb.js`, `index.html` are located
3) run `node index.js`
4) open web browser with TON Wallet extension that has the account that owns your collection and go to `localhost:9615`
## deploying a minter
put the collection address into the `collection` field, the desired cost (in TON) into the `cost` field, the threshold at which to send all TON in the minter contract to the minter owner into the `threshold` field and press `get info`
the `start index` field should be populated with your collection's next item index, and the `minter owner` address should be populated with your own address
the informational `wallet` field should be populated with your own wallet's address, and the `collection owner` will be populated with your collection's owner address
`status` will be `OK` if `wallet` and `collection owner` are the same, which means you can proceed, or it will be `bad` if they are not the same, which means you cannot proceed (because you will not be able to change the collection owner to minter), and that you need to change your TON Wallet's account to the one that owns the collection
`minter address` displays future minter's address, and `minter deployed` should display `false` for now since the minter is not deployed yet

if `status` is `OK` you can press the `deploy minter` button and confirm the transaction in your TON Wallet. after you confirm it, wait a few seconds for it to be confirmed by TON validators and press `get info` again, and if your transaction was successful, `minter deployed` should be changed to `true`
once you deploy the minter (when `minter deployed` shows `true`), you can press the `change collection owner` button so that the minter can perform its function
confirm the transaction and wait for it to be confirmed by validators, then press `get info` again
`collection owner` should change to be the same as `minter address`, and `status` should change to `bad` (since `wallet` and `collection owner` are no longer the same, but that doesn't mean that things are wrong - just that the collection is now owned by the minter)

now copy the `minter address` or `collection owner` (since they are the same now) and paste it into `current minter address`, then press `get minter data`
`minter owner`, `minter next index` and `minter cost` should be populated (if they are not, there is some kind of error)

you can give the minter address to your community now for them to mint NFTs
## controlling the minter
put your minter's address into `current minter address` and fill the parameters above one of the desired action buttons (`mint nfts`, `take tons`, `change cost`), then press the action button and confirm the transaction

`mint nfts` will mint `nfts to mint` to `mint nfts to` for free

`take TONs` will send `TONs to take` from minter's account to `send to`

`change cost` will change one NFT's price to `new cost`
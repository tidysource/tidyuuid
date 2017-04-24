# TIDY UUID
Returns __locally ordered__ UUIDS. Total length is 32, where
each character is 32 bit based on base32hex.

First 9 chars are for timestamp, follwed by 5 chars for
counter of UUIDs within single milisecond and last 18
chars are "randomly" generated.

NOTES:
_Locally ordered_ means different instances running
UUID() could have different/incorrect time settings.
Due to speed and simplicity Math.random() is used
for random values/numbers, this means __tidyuuid is
only pseudorandom__.

## Characteristics:
- max timestamp 35184372088831 === 12 December 3084
- max per milisecond === 32^5 === 33 554 432
- "randomness" === 32^18 === 1.2379400392853803e+27

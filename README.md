# Deprecated this doesnt works anymore, keeping the code just as a reference

# uphold-hooks
hooks with auth-webtasks for uphold tickers

This are simple lambdas to take data from uphold API:

`get-tickers`: returns all tickers if not query params was given. If query params are present, then it will perform a findOne query.

`set-tickers`: cron script that get all tickers (in MXN for now) and pairs to save it into a mongo (mLab) db collection.

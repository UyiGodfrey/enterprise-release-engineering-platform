# Rollback Plan


If production deployment fails:


1. Stop deployment

2. Identify failed version

3. Deploy previous stable version

4. Monitor application


Example:

Current:

v2.0.0


Rollback:

v1.9.0
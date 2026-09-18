export default {
  async fetch(request, env) {
    const B2_KEY_ID = env.B2_KEY_ID;
    const B2_APP_KEY = env.B2_APP_KEY;
    const B2_FILE_ID = env.B2_FILE_ID;
    const B2_FILE_NAME = env.B2_FILE_NAME;

    if (!B2_KEY_ID || !B2_APP_KEY || !B2_FILE_ID || !B2_FILE_NAME) {
      return new Response('Configuration missing', { status: 500 });
    }

    try {
      const authRes = await fetch(
        'https://api.backblazeb2.com/b2api/v2/b2_authorize_account',
        {
          headers: {
            Authorization: 'Basic ' + btoa(B2_KEY_ID + ':' + B2_APP_KEY),
          },
        }
      );

      if (!authRes.ok) {
        return new Response('B2 auth failed', { status: 502 });
      }

      const auth = await authRes.json();
      const downloadUrl = auth.downloadUrl;
      const authToken = auth.authorizationToken;

      const fileUrl = downloadUrl + '/b2api/v2/b2_download_file_by_id?fileId=' + B2_FILE_ID;

      const fileRes = await fetch(fileUrl, {
        headers: {
          Authorization: authToken,
        },
      });

      if (!fileRes.ok) {
        const errText = await fileRes.text();
        return new Response('File error: ' + errText, { status: 404 });
      }

      const headers = new Headers();
      headers.set(
        'Content-Type',
        'application/vnd.android.package-archive'
      );
      headers.set(
        'Content-Disposition',
        `attachment; filename="${B2_FILE_NAME}"`
      );
      headers.set('Cache-Control', 'public, max-age=3600');
      headers.set('Access-Control-Allow-Origin', '*');

      const contentLength = fileRes.headers.get('content-length');
      if (contentLength) {
        headers.set('Content-Length', contentLength);
      }

      return new Response(fileRes.body, {
        status: 200,
        headers,
      });
    } catch (err) {
      return new Response('Proxy error: ' + err.message, { status: 500 });
    }
  },
};
exports.createStream = async (req, res) => {
  res.json({
    streamKey: "stream123",
    rtmpUrl: "rtmp://SERVER_IP/live"
  });
};

exports.getStream = async (req, res) => {
  res.json({
    id: req.params.id,
    playbackUrl: "/hls/stream123.m3u8"
  });
};